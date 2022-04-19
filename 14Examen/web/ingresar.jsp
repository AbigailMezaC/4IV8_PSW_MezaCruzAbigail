<%@page contentType="text/html" language="java" import="java.sql.*, java.util.*, java.text.*" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link rel="stylesheet" href="css/style.css">
        <title>Ingresar</title>
    </head>
    <body>
        <%
            
        Connection con = null;
        Statement set = null;
        ResultSet rs = null;
        
        String username, url, password, driver;
        
        url = "jdbc:mysql://localhost/examen";
        username = "root";
        password = "ab1gail";
        
        driver = "com.mysql.jdbc.Driver";
        
        try{
        
            Class.forName(driver);
            con = DriverManager.getConnection(url, username, password);
            
            try{
                String tr, gr;
                int bl;
                
                tr = request.getParameter("turno");
                gr = request.getParameter("grupo");
                bl = Integer.parseInt(request.getParameter("bol"));
                
                set = con.createStatement();
                
                String q = "insert into alumno(Boleta, Turno, Grupo)" + " values ("+bl+", '"+tr+"', '"+gr+"')";
                
                int registrar = set.executeUpdate(q);
                
                %>
                <h3>Registro Exitoso</h3>
                <div class="divIngresar">
                    <form method="post" action="maquinas.jsp" name="formIngresar" enctype="multipart/form-data">
                        <h3>Ingresa los siguienes datos:</h3>
                        <label>Nombre:</label>
                        <input type="text" name="nombre">
                        <br>
                        <label>Boleta:</label>
                        <input type="text" name="bolUno">
                        <br>
                        <label>Selecciona una Asignatura (Ingresa el número que corresponda):</label>
                        <input type="text" name="asig">
                        <br>
                        <label>1.- BD</label>
                        <br>
                        <label>2.- PSW</label>
                        <br>
                        <label>3.- LPTI II</label>
                        <br>
                        <label>4.- TPPC</label>
                        <br>
                        <label>Selecciona un Laboratorio:</label>
                        <input type="text" name="lab">
                        <br>
                        <label>1.- Aula 4.0</label>
                        <br>
                        <label>2.- Base de Datos</label>
                        <br>
                        <label>3.- Nuevas Tecnologías</label>
                        <br>
                        <label>4.- Desarrollo de Software</label>
                        <br>
                        <label>Ingresa el número de tu máquina:</label>
                        <input type="text" name="maq">
                        <br>
                        <input type="submit" value="Registrar">
                        <input type="reset" value="Borrar Registro">
                    </form>
                </div>
                <%
                
            }catch(SQLException es){
                
                System.out.println("Error al registrar en la tabla");
                System.out.println(es.getMessage());

                %>
                <h3>No se pudo registrar en la tabla</h3>
                <%
            }
        }catch(Exception e){

            System.out.println("Error al conectar la BD");
            System.out.println(e.getMessage());

            %>
            <h3>No se conectó con la BD T_T</h3>
            <%
        }
        %>
        <a href="index.html">Regresar a Principal</a>
    </body>
</html>

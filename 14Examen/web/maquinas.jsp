<%@page contentType="text/html" language="java" import="java.sql.*, java.util.*, java.text.*" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link rel="stylesheet" href="css/style.css">
        <title>JSP Page</title>
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
                String nom;
                int bol;
                int as;
                int lb;
                int mq;
                
                nom = request.getParameter("nombre");
                bol = Integer.parseInt(request.getParameter("bolUno"));
                as = Integer.parseInt(request.getParameter("asig"));
                lb = Integer.parseInt(request.getParameter("lab"));
                mq = Integer.parseInt(request.getParameter("maq"));
                
                set = con.createStatement();
                
                String q = "insert into maquinas " + "values ("+bol+", "+mq+", "+as+", "+lb+")";
                
                int registro = set.executeUpdate(q);
                
                %>
                <h3>Registro Exitoso</h3>
                <div class="divCons">
                    <form method="post" action="" name="formCons">
                        <h3>Consultar Datos</h3>
                        <label>Boleta:</label>
                        <input type="text" name="bolCon">
                        <br>
                        <input type="submit" value="Consultar">
                        <input type="reset" value="Borrar">
                    </form>
                </div>
                <%
                
            }catch(SQLException es){
                
                System.out.println("Error al registrar en la tabla");
                System.out.println(es.getMessage());

                %>
                <h1>No se pudo registrar en la tabla</h1>
                <%
            }
        }catch(Exception e){

            System.out.println("Error al conectar la BD");
            System.out.println(e.getMessage());

            %>
            <h1>No se conectó con la BD T_T</h1>
            <%
        }
        %>
        <a href="index.html">Regresar a Principal</a>
    </body>
</html>

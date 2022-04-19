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
        //Aquí ya puedo incorporar java
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
            
                int bol = Integer.parseInt(request.getParameter("bolEl"));
                
                String q = "delete from alumno where Boleta="+bol+"";
                
                set = con.createStatement();
                
                int borrar = set.executeUpdate(q);
                
                %>
                <h1>Se eliminó al Alumno con Éxito</h1>
                <%
                
            }catch(SQLException es){
                
                System.out.println("Error al borrar de la tabla");
                System.out.println(es.getMessage());

                %>
                <h1>No se pudo eliminar en la tabla</h1>
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

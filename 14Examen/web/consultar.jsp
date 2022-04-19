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
                int boleta;

                boleta = Integer.parseInt(request.getParameter("bolCon"));
            
                String q = "select * from maquinas where boleta("+boleta+")";
                
                set = con.createStatement();
                
                rs = set.executeQuery(q);
                
                while(rs.next()){
                
                %>
                <tr>
                    <td><%=rs.getInt("boleta")%></td>
                    <td><%=rs.getString("mq")%></td>
                    <td><%=rs.getString("as")%></td>
                    <td><%=rs.getString("lb")%></td>
                    <td><a href="editar.jsp?id=<%=rs.getInt("boleta")%>" >Editar</a></td>
                    <td><a href="eliminar.jsp?id=<%=rs.getInt("boleta")%>" >Borrar</a></td>
                </tr>
                <%
                }
                
                %>
                <h1>Registro Exitoso</h1>
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

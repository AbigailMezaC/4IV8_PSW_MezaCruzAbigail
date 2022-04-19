/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/Servlet.java to edit this template
 */

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import java.sql.*;
import javax.servlet.ServletConfig;

/**
 *
 * @author mezac
 */
public class ConsultarAlumnos extends HttpServlet {

    /**
     * Para poder establecer una conexión con base de datos es necesario
     * contar con tres tipos de objetos my específicos los cuales son:
     * Connection: es el encargado de establecer la conexión con el servidor de BD
     * Statement: sirve para poder definir y manipular los diferentes objetos de las querrys como por ejemplo: create, delete, insert, update, drop, etc
     * ResultSet: sirve para poder realizar las consultas a la BD 
     */
    
    private Connection con;
    private Statement set;
    private ResultSet rs;
    
    //Definir el constructor
    
    public void init(ServletConfig scg) throws ServletException{
        //Establecer la conexión con la BD
        //"Controlador:Motor de la BD:Puerto de Comunicación//IP donde se encuentra la BD/NombreBD de la BD"
        String url = "jdbc:mysql:3306//localhost/alumnos";
        
        String username = "root";
        String password = "n0m3l0";
        
        try{
            //Intentar conectar a la BD
            Class.forName("com.mysql.jdbc.Driver");
            url = "jdbc:mysql://localhost/alumnos";
            con = DriverManager.getConnection(url, username, password);
            set = con.createStatement();
            
            System.out.println("Si conectó a la BD :3 *w* ");
        }catch(Exception e){
            System.out.println("No conectó, solo juguito contigo unu");
            System.out.println(e.getMessage());
            System.out.println(e.getStackTrace());
        }
    }
    
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        try ( PrintWriter out = response.getWriter()) {
            /* TODO output your page here. You may use following sample code. */
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Tabla de Alumnos de Batiz</title>");            
            out.println("</head>");
            out.println("<body>");
            out.println("<h1>Lista de Alumnos de Batiz</h1>"
            +"<br>"
            +"<table border='2' >"
                    +"<tr>"
                        +"<th>Boleta</th>"
                        +"<th>Nombre del Alumno</th>"
                        +"<th>Teléfono</th>"
                    +"</tr>");
            try{
                int bol;
                String nom, apellidopaterno, apellidomaterno, tel;
                
                //Que tipo de querry voy a realizar
                String q = "select * from alumnobatiz";
                
                set = con.createStatement();
                rs = set.executeQuery(q);
                
                while(rs.next()){
                    bol = rs.getInt("boleta");
                    nom = rs.getString("nombre");
                    apellidopaterno = rs.getString("appat");
                    apellidomaterno = rs.getString("apmat");
                    tel = rs.getString("telefono");
                    
                    out.println("<tr>"
                            + "<td>"+bol+"</td>"
                            + "<td>"+nom+" "+apellidopaterno+" "+apellidomaterno+"</td>"
                            + "<td>"+tel+"</td>"
                            + "</tr>");
                }
                
                rs.close();
                set.close();
                
            }catch(Exception e){
                System.out.println("Error al conectar la tabla T_T");
                System.out.println(e.getMessage());
                System.out.println(e.getStackTrace());
            }
            out.println("</table>"
                    +"<br>"
                    +"<a href='index.html'>Regresar a Principal</a>");
            out.println("</body>");
            out.println("</html>");
        }
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>
    
    public void destroy(){
        try{
            con.close();
        }catch(Exception e){
            super.destroy();
        }
    }

}

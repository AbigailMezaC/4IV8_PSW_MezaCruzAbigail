/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/Servlet.java to edit this template
 */

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.*;
import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author mezac
 */
public class RegistrarAlumnos extends HttpServlet {
    
    private Connection con;
    private Statement set;
    private ResultSet rs;
    
    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    
    public void init(ServletConfig scg) throws ServletException{
        //Establecer la conexión con la BD
        //"Controlador:Motor de la BD:Puerto de Comunicación//IP donde se encuentra la BD/NombreBD de la BD"
        String url = "jdbc:mysql:3306//localhost/alumnos";
        
        String username = "root";
        String password = "ab1gail";
        
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
        processRequest(request, response);
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
        response.setContentType("text/html;charset=UTF-8");
        try ( PrintWriter out = response.getWriter()) {
            /* TODO output your page here. You may use following sample code. */
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Registro de Alumnos</title>");            
            out.println("</head>");
            out.println("<body>");
            
            try{
                //Obtener los parámetros para poer insertarlos en la abse de datos
                String nom, appat, apmat, tel;
                int boleta;
                
                nom = request.getParameter("nombre");
                appat = request.getParameter("appat");
                apmat = request.getParameter("apmat");
                tel = request.getParameter("telefono");
                boleta = Integer.parseInt(request.getParameter("boleta"));
                
                System.out.println(nom);
                System.out.println(appat);
                System.out.println(apmat);
                System.out.println(tel);
                System.out.println(boleta);
               
                //Se debe preparar la sentencia
                String q = "insert into alumnosbatiz " 
                        + "values ("+boleta+", '"+nom+"', '"+appat+"', '"+apmat+"', '"+tel+"')";
                
                //Se debe ejecutar la sentencia
                
                set.executeUpdate(q);
                out.println("<h1>Alumno Registrado con Éxito</h1>");
                System.out.println("Dato Registrado");
                
            }catch(Exception e){
                
                System.out.println("No se pudo registrar, verifica los datos de entrada");
                System.out.println(e.getMessage());
                System.out.println(e.getStackTrace());
                out.println("<h1>El Alumno no se pudo Registrar, hay un error</h1>");
                
            }
            
            out.println("<a href='ConsultarAlumnos'>Consultar Alumnos</a>");
            out.println("</body>");
            out.println("</html>");
        }
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

package pack;

import java.io.File;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.apache.commons.fileupload.FileItem;
import org.apache.commons.io.*;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;

/**
* Servlet to handle File upload request from Client
* @author Javin Paul
*/
@WebServlet("/Uploader1")
public class FileUploadHandler extends HttpServlet {
   private final String UPLOAD_DIRECTORY = "C:\\uploads";
 
/*   @Override
   protected void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException
   {
	   response.sendRedirect("sjdfj");
	   
   }*/
   @Override
   protected void doPost(HttpServletRequest request, HttpServletResponse response)
           throws ServletException, IOException {
	   response.setHeader("Access-Control-Allow-Origin", "*");
	   String oName = null;
       //process only if its multipart content
       if(ServletFileUpload.isMultipartContent(request)){
           try {
               List<FileItem> multiparts = new ServletFileUpload(
                                        new DiskFileItemFactory()).parseRequest(request);
             
               for(FileItem item : multiparts){
                   if(!item.isFormField()){
                       String name = new File(item.getName()).getName();
                       item.write( new File("E:\\uploads\\" + name));
                       System.out.println("filename: " + name);
                       oName = name ;
                   }
               }
              //File uploaded successfully
              request.setAttribute("message", "File Uploaded Successfully");
              request.setAttribute("fileName" , oName);
              //response.sendRedirect("/result.jsp"); 
             /* RequestDispatcher requestDispatcher; 
              requestDispatcher = request.getRequestDispatcher("/result.jsp");
              requestDispatcher.forward(request, response);*/
              request.getRequestDispatcher("/result.jsp").forward(request, response);
              
           } catch (Exception ex) {
              request.setAttribute("message", "File Upload Failed due to " + ex);
           }          
        
       }else{
           request.setAttribute("message",
                                "Sorry this Servlet only handles file upload request");
           request.getRequestDispatcher("/result.jsp").forward(request, response);
           
           
           
       }
   
       
       
       
       /*  response.setHeader("message", "FILERECEIVED");
       PrintWriter out = response.getWriter();
       out.println(oName);*/
   }
 
}
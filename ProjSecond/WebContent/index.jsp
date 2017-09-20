<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ page import="java.lang.*" %>
<%@ page import="java.io.*" %>
<%@ page import="java.util.*" %>

<%@ page import="org.apache.commons.fileupload.FileItem" %>
<%@ page import="org.apache.commons.fileupload.disk.DiskFileItemFactory" %>
<%@ page import="org.apache.commons.fileupload.servlet.ServletFileUpload" %>

<%

response.setHeader("Access-Control-Allow-Origin","*");
/* final String UPLOAD_DIRECTORY = "E:/uploads";
if(ServletFileUpload.isMultipartContent(request)){

    try {
        List<FileItem> multiparts = new ServletFileUpload(
                                 new DiskFileItemFactory()).parseRequest(request);
       
        for(FileItem item : multiparts){
            if(!item.isFormField()){
                String name = new File(item.getName()).getName();
                item.write( new File(UPLOAD_DIRECTORY + File.separator + name));
            }
        }
    
       //File uploaded successfully
       request.setAttribute("message", "File Uploaded Successfully");
    } catch (Exception ex) {
       request.setAttribute("message", "File Upload Failed due to " + ex);
    }         
  
}else{
    request.setAttribute("message",
                        "Sorry this Servlet only handles file upload request");
}

request.getRequestDispatcher("http://localhost:4200/").forward(request, response);
*/
///////////////////////////////////////////"/result.jsp"
///////////////////////////////////////////

String n = request.getParameter("name");
 
//out.print("E:\\trial\\test.txt for " + n.charAt(1));
		
String cmdStart = "notepad.exe";
String cmd = "C:/Users/Danej/Documents/Piyush/hello.txt";//"cd Documents\\Piyush ";
String str =null;

List<String> openPath = new ArrayList<String>();
openPath.add(cmdStart);
openPath.add(cmd);
		
ProcessBuilder procB = new ProcessBuilder(openPath); // Documents\\Piyush ") ; // && dir /T:W hello.txt");
//System.out.println(procB.directory());
procB.redirectErrorStream(true);
Process p = procB.start();

BufferedReader brInput = new BufferedReader(new InputStreamReader(p.getInputStream()));

while((str = brInput.readLine()) != null)
{
	out.println("output Line : "+str);
}


%>
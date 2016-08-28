package javaserver.websocket;

import javax.websocket.OnClose;
import javax.websocket.OnError;
import javax.websocket.OnMessage;
import javax.websocket.OnOpen;
import javax.websocket.Session;
import javax.websocket.server.ServerEndpoint;
import javax.enterprise.context.ApplicationScoped;
import java.io.StringReader;
import javax.json.Json;
import javax.json.JsonObject;
import javax.json.JsonReader;
//import java.util.logging.Level;
//import java.util.logging.Logger;

@ApplicationScoped    
@ServerEndpoint("/server")
public class DeviceWebSocketServer {
	
//	@Inject
    private DeviceSessionHandler sessionHandler = new DeviceSessionHandler();
	
	@OnOpen
    public void open(Session session) {
		sessionHandler.addSession(session);
	}
	
	@OnClose
    public void close(Session session) {
		sessionHandler.removeSession(session);
    }

    @OnError
    public void onError(Throwable error) {
//        Logger.getLogger(DeviceWebSocketServer.class.getName()).log(Level.SEVERE, null, error);
    }
	
	@OnMessage
    public void handleMessage(String message, Session session) {

        try (JsonReader reader = Json.createReader(new StringReader(message))) {
            JsonObject jsonMessage = reader.readObject();
            switch(jsonMessage.getString("action")){
            case "add":
            	Device device = new Device();
                device.setName(jsonMessage.getString("name"));
                device.setDescription(jsonMessage.getString("description"));
                device.setType(jsonMessage.getString("type"));
                device.setStatus("Off");
                sessionHandler.addDevice(device);
                break;
            case "remove":
                sessionHandler.removeDevice((int) jsonMessage.getInt("id"));
                break;
            case "toggle":
                sessionHandler.toggleDevice((int) jsonMessage.getInt("id"));
                break;
            case "login":
            	sessionHandler.reponseOnly(session);
            	break;
            default:
            	sessionHandler.reponseOnly(session);
            }
        }
    }
}

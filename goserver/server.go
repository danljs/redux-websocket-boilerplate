package main

import (
	"fmt"
	// "io"
	"log"
	"net/http"
	"golang.org/x/net/websocket"
)

func echoHandler(ws *websocket.Conn) {
	// io.Copy(ws, ws)
	msg := make([]byte, 512)
	i := 0
	for {
		i++
		log.Printf("Loop: %d\n", i)
		n, err := ws.Read(msg)
		if err != nil {
			log.Fatal(err)
		}
		log.Printf("Receive: %s\n", msg[:n])

		m, err := ws.Write(msg[:n])
		if err != nil {
			log.Fatal(err)
		}
		fmt.Printf("Send: %s\n", msg[:m])
	}
}

func main() {
	http.Handle("/server", websocket.Handler(echoHandler))
	http.Handle("/", http.FileServer(http.Dir(".")))
	err := http.ListenAndServe(":8585", nil)
	if err != nil {
		panic("ListenAndServe: " + err.Error())
	}
}

package main

import (
	"log"
	"net/http"

	"./chat"
)

func main() {
	log.SetFlags(log.Lshortfile)

	// websocket server
	server := chat.NewServer("/server")
	go server.Listen()

	// static files
	http.Handle("/", http.FileServer(http.Dir("webroot")))

	log.Fatal(http.ListenAndServe(":8585", nil))
}
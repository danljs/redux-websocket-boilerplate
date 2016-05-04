package main

import (
	"log"
	"net/http"
	"./controller"
)

func main() {
	log.SetFlags(log.Lshortfile)

	// websocket server
	server := controller.NewServer("/server")
	go server.Listen()

	// static files
	// http.Handle("/", http.FileServer(http.Dir("webroot")))

	log.Fatal(http.ListenAndServe(":8585", nil))
}
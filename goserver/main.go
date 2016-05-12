package main

import (
	"fmt"
	"log"
	"net/http"
	"./controller"
)

func main() {
	fmt.Printf("1\n")
	log.SetFlags(log.Lshortfile)
	fmt.Printf("2\n")
	// websocket server
	server := controller.NewServer("/server")
	fmt.Printf("3\n")
	go server.Listen()
	fmt.Printf("4\n")
	// static files
	// http.Handle("/", http.FileServer(http.Dir("webroot")))

	log.Fatal(http.ListenAndServe(":8585", nil))
	fmt.Printf("5\n")
}
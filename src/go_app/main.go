package main

import (
	"go-test/app/routes"
)

func main() {
	router := routes.GetRouter()
	router.Run(":80")
}

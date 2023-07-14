package controllers

import (
	"log"

	"github.com/gin-gonic/gin"
)

func ShowMessage(c *gin.Context) {
	log.Printf("hello")
	c.JSON(200, gin.H{
		"message": "Hello World",
	})
}

package routes

import (
	"go-test/app/controllers"
	"log"

	"github.com/gin-gonic/gin"

	"gopkg.in/olahol/melody.v1"
)

func GetRouter() *gin.Engine {
	r := gin.Default()
	m := melody.New()

	r.GET("/", controllers.ShowMessage)

	r.GET("/ws", func(ctx *gin.Context) {
		m.HandleRequest(ctx.Writer, ctx.Request)
	})

	m.HandleMessage(func(s *melody.Session, msg []byte) {
		log.Printf("%#v\n", msg)
		m.BroadcastOthers(msg, s)
	})

	m.HandleConnect(func(s *melody.Session) {
		log.Printf("websocket connection open. [session: %#v]\n", s)
	})

	m.HandleDisconnect(func(s *melody.Session) {
		log.Printf("websocket connection close. [session: %#v]\n", s)
	})

	return r
}

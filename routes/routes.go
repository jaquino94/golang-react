package routes

import (
	db "jaquino94/golang-react/datastore"

	"github.com/gofiber/fiber/v2"
)

func Hello(res *fiber.Ctx) error {
	db.Get()
	return res.JSON(&fiber.Map{
		"Message": "Hello",
	})
}

func Home(res *fiber.Ctx) error {
	return res.Send([]byte("HOME"))
}

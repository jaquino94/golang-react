package routes

import (
	"github.com/gofiber/fiber/v2"
)

func Hello(res *fiber.Ctx) error {
	return res.JSON(&fiber.Map{
		"Message": "Hello",
	})
}

func Home(res *fiber.Ctx) error {
	return res.Send([]byte("HOME"))
}

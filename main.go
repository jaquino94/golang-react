package main

import(

	"github.com/gofiber/fiber/v2"
)

func main() {
	app := fiber.New();

	app.Get("/hello", func(res *fiber.Ctx) error {
		return res.SendString("Hello from Fiber!")
	})

	app.Listen(":3000")
}

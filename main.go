package main

import (
	"jaquino94/golang-react/routes"

	"github.com/gofiber/fiber/v2"
)

func main() {
	app := fiber.New()

	app.Get("/hello", routes.Hello)
	app.Get("/", routes.Home)

	app.Listen(":8000")
}

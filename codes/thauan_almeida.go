package main

import (
	"fmt"
	"time"
)

func ThanksToPodcast(host string, guest string) string {
	date := time.Now()
	message := fmt.Sprintf("Obrigado, %v! Você entrevistou o %v no dia %v.", host, guest, date.Format("02/01/2006"))

	return message
}

func main() {
	message := ThanksToPodcast("Matheus Trindade", "Thauan Almeida")

	fmt.Println(message)
}

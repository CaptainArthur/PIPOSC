teplota = 0

def on_button_pressed_a():
    radio.send_value("name", input.temperature())
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_received_value(name, value):
    global teplota
    teplota = input.temperature()
radio.on_received_value(on_received_value)

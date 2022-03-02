def on_button_pressed_a():
    if True:
        radio.send_value("name", randint(0, 10))
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_received_value(name, value):
    basic.show_number(randint(0, 10))
    basic.pause(1000)
    basic.clear_screen()
radio.on_received_value(on_received_value)

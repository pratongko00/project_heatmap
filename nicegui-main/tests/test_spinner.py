from selenium.webdriver.common.by import By

from nicegui import ui

from .screen import Screen


def test_spinner(screen: Screen):
    ui.spinner(size='3em', thickness=10)

    screen.open('/')
    element = screen.find_by_tag('svg')
    assert element.get_attribute('width') == '3em'
    assert element.get_attribute('height') == '3em'
    assert element.find_element(By.TAG_NAME, 'circle').get_attribute('stroke-width') == '10'

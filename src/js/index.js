import '../scss/index.scss'
import 'bootstrap'
import {TestModule} from '@/js/TestModule'

/* Демонстрация работы подключенного модуля */
const testModule = new TestModule()
testModule.demo()

/* Демонстрация работы jQuery */
$('body').addClass('new')
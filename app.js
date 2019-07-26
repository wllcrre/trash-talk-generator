// require packages used in the project
const express = require('express')
const app = express()
const port = 3000

// require express-handlebars here
const exphbs = require('express-handlebars')

//載入 body - parser
const bodyParser = require('body-parser')

// setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// setting static files
app.use(express.static('public'))

//不管從哪個路由發送過來的請求，都先經過 bodyParser 進行前置處理
//這行程式碼擺放的順序需要在所有路由設定之前。
app.use(bodyParser.urlencoded({ extended: true }))


function generate_talk(radio_option) {
  const task = {
    engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
    designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
    entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']
  }

  const phrase = ['很簡單', '很容易', '很快', '很正常']

  const target = {
    engineer: ['工程師'],
    designer: ['設計師'],
    entrepreneur: ['創業家']
  }

  random1 = Math.floor(Math.random() * 4)
  random2 = Math.floor(Math.random() * 4)

  console.log(random1)
  console.log(random2)


  let trash_talk = "身為一個" + target[radio_option.target][0] + "" + task[radio_option.target][random1] + phrase[random2] + "吧!"

  return trash_talk
}



// routes setting
app.get('/', (req, res) => {

  console.log("get route ")
  res.render('index')

})

app.post('/', (req, res) => {
  console.log('get form POST request')
  // console.log(req.body)

  radio_option = req.body

  console.log('radio_option: ', radio_option)
  console.log('radio_option_target: ', radio_option.target)

  const trash_talk = generate_talk(radio_option)

  let engineer_chk = ""
  let designer_chk = ""
  let entrepreneur_chk = ""


  if (radio_option.target === "engineer") {
    engineer_chk = "checked"
  }
  if (radio_option.target === "designer") {
    designer_chk = "checked"
  }
  if (radio_option.target === "entrepreneur") {
    entrepreneur_chk = "checked"
  }

  console.log(entrepreneur_chk + designer_chk + engineer_chk)

  // const trash_talk = "xxxxx"

  res.render('index', { trash_talk: trash_talk, radio_option: radio_option, engineer_chk: engineer_chk, designer_chk: designer_chk, entrepreneur_chk: entrepreneur_chk })
})

// start and listen on the Express server
app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`)
})
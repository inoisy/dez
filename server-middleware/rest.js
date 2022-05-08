const bodyParser = require('body-parser')
const app = require('express')()
const axios = require('axios')
require('dotenv').config()

app.use(bodyParser.json())
app.post('/getJSON', async (req, res) => {
  // console.log('🚀 ~ file: rest.js ~ line 8 ~ app.post ~ req', req)
  const { name, phone, message } = req.body
  const dictionary = {
    name: 'Имя',
    phone: 'Телефон',
    message: 'Сообщение'
  }
  const text = Object.entries({ name, phone, message }).reduce((acc, [field, value]) => {
    // console.log('🚀 ~ file: rest.js ~ line 14 ~ text ~ val', val)
    if (value) {
      acc.push(encodeURIComponent(`${dictionary[field]}: ${value}`))
    }
    return acc
  }, []).join('%0A')
  // console.log('🚀 ~ file: rest.js ~ line 17 ~ text ~ text', text)
  // const text = encodeURIComponent(`Имя: ${name}`) + '%0A' + encodeURIComponent(`Телефон: ${phone}`)
  const token = process.env.TELEGRAM_TOKEN
  const chatId = process.env.TELEGRAM_CHAT_ID
  try {
    const { data } = await axios.post(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&parse_mode=html&text=${text}`)
    res.json({ data, error: false })
  } catch (error) {
    console.error('🚀 ~ file: rest.js ~ line 17 ~ app.post ~ error', error)
    res.json({ data: error, error: true })
  }
})

module.exports = app

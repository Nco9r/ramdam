const nodemailer = require('nodemailer')
import express from 'express'
const app = express()

app.post('/senddasri', (req, res) => {
  console.log(req.body)
  // Récupération de la date du jour

  var date = new Date()
  var options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  }
  var heure = date.getHours()
  var minute = date.getMinutes()

  // Récupération des élements de l'array fourniture

  const item = req.body.item
  const itemFourniture = item.map((item) => {
    return (
      ' <strong>Nom du produit</strong> :' +
      ' ' +
      item.designation +
      '<br>' +
      ' <strong>Quantité</strong> :' +
      ' ' +
      item.quantity +
      ' <br>' + ' ------- ' + '<br>'
    )
  })
  async function main() {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    let testAccount = await nodemailer.createTestAccount()

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: process.env.HOST,
      port: process.env.PORT_HOST,
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.AUTH_USER, // generated ethereal user
        pass: process.env.AUTH_PASS, // generated ethereal password
      },
    })

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: 'hello@rouxnicolas.fr', // sender address
      to: req.body.email, // list of receivers
      subject: 'DASRI', // Subject line
      html: `<p>Bonjour Mme/Mr <strong>${
        req.body.contact
      }</strong>,</p><p> Comme convenu, nous sommes bien intervenu pour vos DASRI aujourd’hui, ${date.toLocaleDateString(
        'fr-FR',
        options
      )} à ${heure}h${minute}. <br/> Veuillez trouver ci-dessous le détail de la prestation effectuée: </p> 
    <p> <span style="color: #008000; font-weight: 700;" >Fourniture de contenant</span> : </p><p> ${itemFourniture} </p>
    <p> <span style="color: #008000; font-weight: 700;" >Collecte et élimination de contenant</span> : </br> Il n’y avait rien à collecter. </p> 
    <p>Bien à vous,</p> 
    <p>L’équipe <span style="color: #008000; font-weight: 700;" >RAM</span><span style="color: #FFC000; font-weight: 700;" >DAM</span> </br>
    09 51 32 17 34 </br>
    7, rue de Mireport </br> 33310 Lormont </p>
    `,
    })

    console.log('Message sent: %s', info.messageId)
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info))
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  }
  main().catch(console.error)
})

app.post('/absencedasri', (req, res) => {
  // Récupération de la date du jour

  var date = new Date()
  var options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  }
  var heure = date.getHours()
  var minute = date.getMinutes()

  // Récupération des élements de l'array fourniture

  async function main() {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    let testAccount = await nodemailer.createTestAccount()

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: process.env.HOST,
      port: process.env.PORT_HOST,
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.AUTH_USER, // generated ethereal user
        pass: process.env.AUTH_PASS, // generated ethereal password
      },
    })

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: 'hello@rouxnicolas.fr', // sender address
      to: req.body.email, // list of receivers
      subject: 'Absence lors du passage', // Subject line
      html: `<p>Bonjour,</p><p> Comme convenu, nous sommes bien intervenu pour vos DASRI aujourd’hui, ${date.toLocaleDateString(
        'fr-FR',
        options
      )} à ${heure}h${minute}. </p><p> Cependant nous n’avons pas pu effectuer la prestation en raison de <strong>votre absence à l’heure de passage prévue.</strong></p> 
    <p> N’hésitez pas à revenir vers nous si vous souhaitez convenir d’une nouvelle date de passage</p>
    <p>Bien à vous,</p> 
    <p>L’équipe <span style="color: #008000; font-weight: 700;" >RAM</span><span style="color: #FFC000; font-weight: 700;" >DAM</span> </br>
    09 51 32 17 34 </br>
    7, rue de Mireport </br> 33310 Lormont </p>
    `,
    })

    console.log('Message sent: %s', info.messageId)
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info))
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  }
  main().catch(console.error)
})

app.post('/dasri', (req, res) => {
  // Récupération de la date du jour

  var date = new Date()
  var options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  }
  var heure = date.getHours()
  var minute = date.getMinutes()

  // Récupération des élements de l'array fourniture

  const item = req.body.item
  const itemFourniture = item.map((item) => {
    return (
      ' <strong>Nom du produit</strong> :' +
      ' ' +
      item.designation +
      '<br>' +
      ' <strong>Quantité</strong> :' +
      ' ' +
      item.quantity +
      ' <br>' + ' ------- ' + '<br>'
    )
  })

  const collecte = req.body.itemc
  const itemCollecte = collecte.map((item) => {
    return (
      ' <strong>Nom du produit</strong> :' +
      ' ' +
      item.designation +
      '<br>' +
      ' <strong>Quantité</strong> :' +
      ' ' +
      item.quantity +
      ' <br>' + ' ------- ' + '<br>'
    ) 
  })

  console.log(req.body.email)
  console.log(req.body.fourniture)
  async function main() {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    let testAccount = await nodemailer.createTestAccount()

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: process.env.HOST,
      port: process.env.PORT_HOST,
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.AUTH_USER, // generated ethereal user
        pass: process.env.AUTH_PASS, // generated ethereal password
      },
    })

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: 'hello@rouxnicolas.fr', // sender address
      to: req.body.email, // list of receivers
      subject: 'DASRI', // Subject line
      html: `<p>Bonjour Mme/Mr <strong>${
        req.body.contact
      }</strong>,</p><p> Comme convenu, nous sommes bien intervenu pour vos DASRI aujourd’hui, ${date.toLocaleDateString(
        'fr-FR',
        options
      )} à ${heure}h${minute}. <br/> Veuillez trouver ci-dessous le détail de la prestation effectuée: </p> 
    <p> <span style="color: #008000; font-weight: 700;" >Fourniture de contenant</span> : </p><p> ${itemFourniture} </p>
    <p> <span style="color: #008000; font-weight: 700;" >Collecte et élimination de contenant</span> : </p><p> ${itemCollecte}. </p> 
    <p>Bien à vous,</p> 
    <p>L’équipe <span style="color: #008000; font-weight: 700;" >RAM</span><span style="color: #FFC000; font-weight: 700;" >DAM</span> </br>
    09 51 32 17 34 </br>
    7, rue de Mireport </br> 33310 Lormont </p>
    `,
    })

    console.log('Message sent: %s', info.messageId)
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info))
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  }
  main().catch(console.error)
})

export default {
  path: '/api/email',
  handler: app,
}

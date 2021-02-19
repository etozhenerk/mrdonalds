const functions = require("firebase-functions");
const nodemailer = require("nodemailer");
const htmlToText = require("nodemailer-html-to-text").htmlToText;
const { email, password } = require("./config");

const transportep = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email,
    pass: password,
  },
});

transportep.use("compile", htmlToText());

const sendOrderEmail = (data) => {
  const options = {
    from: `MRDonald's <${email}>`,
    to: data.email,
    subject: `Ваш заказ из MRDonald's`,
    html: `
      <div>
        <h2>Добрый день ${data.nameClient}</h2>
        <h3>Ваш заказ:</h3>
        <ul>
          ${data.order.map(
            ({ name, count, price, topping, choice }) =>
              `<li>${name} ${
                choice !== "no choices" ? ` -  ${choice}` : ""
              } - ${count}шт.${
                topping !== "no toppings" ? `с допами: ${topping}` : ""
              }, цена ${price * count} руб.</li>`
          )}
        </ul>
        <p>Итого: ${data.order.reduce(
          (sum, item) => sum + item.price * item.count,
          0
        )} руб.</p>
        <small>Ожидайте курьера.</small>
      </div>
    `,
  };

  transportep.sendMail(options);
};

exports.sendUserEmail = functions.database
  .ref("orders/{pushID}")
  .onCreate((order) => sendOrderEmail(order.val()));

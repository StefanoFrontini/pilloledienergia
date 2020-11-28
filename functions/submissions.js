const axios = require("axios");
const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
  host: "smtp.zoho.eu",
  port: 465,
  secure: true, //ssl
  auth: {
    user: process.env.ZOHO_USER,
    pass: process.env.ZOHO_PSW,
  },
});

/* const { insufficiente } = require("./utils/insufficiente.js");
const { sufficiente } = require("./utils/sufficiente.js");
const { buono } = require("./utils/buono.js"); */

exports.handler = async (event) => {
  const payload = JSON.parse(event.body);
  //console.log(`Payload: ${JSON.stringify(payload)}`);
  const {
    form,
    email,
    nome,
    domanda1,
    domanda2,
    domanda3,
    domanda4,
    domanda5,
    domanda6,
    domanda7,
    domanda8,
    domanda9,
    domanda10,
    numerosi,
    numerono,
    iva,
    accise,
  } = payload;

  const buono = `
<!doctype html><html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office"><head><title></title><!--[if !mso]><!-- --><meta http-equiv="X-UA-Compatible" content="IE=edge"><!--<![endif]--><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style type="text/css">#outlook a { padding:0; }
          .ReadMsgBody { width:100%; }
          .ExternalClass { width:100%; }
          .ExternalClass * { line-height:100%; }
          body { margin:0;padding:0;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%; }
          table, td { border-collapse:collapse;mso-table-lspace:0pt;mso-table-rspace:0pt; }
          img { border:0;height:auto;line-height:100%; outline:none;text-decoration:none;-ms-interpolation-mode:bicubic; }
          p { display:block;margin:13px 0; }</style><!--[if !mso]><!--><style type="text/css">@media only screen and (max-width:480px) {
            @-ms-viewport { width:320px; }
            @viewport { width:320px; }
          }</style><!--<![endif]--><!--[if mso]>
        <xml>
        <o:OfficeDocumentSettings>
          <o:AllowPNG/>
          <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
        </xml>
        <![endif]--><!--[if lte mso 11]>
        <style type="text/css">
          .outlook-group-fix { width:100% !important; }
        </style>
        <![endif]--><style type="text/css">@media only screen and (min-width:480px) {
        .mj-column-per-100 { width:100% !important; max-width: 100%; }
.mj-column-px-400 { width:400px !important; max-width: 400px; }
      }</style><style type="text/css">@media only screen and (max-width:480px) {
      table.full-width-mobile { width: 100% !important; }
      td.full-width-mobile { width: auto !important; }
    }</style></head><body style="background-color:#f0f0f0;"><div style="background-color:#f0f0f0;"><!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]--><div style="background:white;background-color:white;Margin:0px auto;max-width:600px;"><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:white;background-color:white;width:100%;"><tbody><tr><td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;vertical-align:top;"><!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:600px;" ><![endif]--><div class="mj-column-per-100 outlook-group-fix" style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%"><tr><td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;"><tbody><tr><td style="width:550px;"><img height="auto" src="https://res.cloudinary.com/stefano75/image/upload/v1606126533/3_RISULTATI_buono_epq0e0.jpg" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;" width="550"></td></tr></tbody></table></td></tr></table></div><!--[if mso | IE]></td></tr></table><![endif]--></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]--><div style="background:white;background-color:white;Margin:0px auto;max-width:600px;"><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:white;background-color:white;width:100%;"><tbody><tr><td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;vertical-align:top;"><!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:400px;" ><![endif]--><div class="mj-column-px-400 outlook-group-fix" style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%"><tr><td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;"><div style="font-family:sans-serif;font-size:13px;line-height:16px;text-align:left;color:#000000;"><strong><i>Ciao ${nome}</i>,<br>complimenti</strong> per aver dedicato del tempo all'analisi delle tue forniture.</div></td></tr><tr><td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;"><div style="font-family:sans-serif;font-size:13px;line-height:16px;text-align:left;color:#000000;">Questo breve <span style="color:#f78411">check-up</span> è solo l'inizio di un percorso per arrivare ad ottimizzare al massimo i tuoi costi e cosa altrettanto importante il tuo tempo. <strong>Non perdere l'occasione</strong> di sapere grazie a un'analisi approfondita e personalizzata - <span style="color:#f78411">gratuita e senza impegno</span> - come arrivare a raggiungere questo importante risultato per la tua attività.</div></td></tr><tr><td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;"><tbody><tr><td style="width:130px;"><a href="mailto:stefano.frontini@con.repower.com" target="_blank"><img height="auto" src="https://res.cloudinary.com/stefano75/image/upload/v1606256864/contattami_cgzkpc.jpg" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;" width="130"></a></td></tr></tbody></table></td></tr><tr><td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;"><div style="font-family:sans-serif;font-size:13px;line-height:16px;text-align:left;color:#000000;">Mi chiamo Stefano Frontini e da 15 anni sono un <strong>consulente</strong> energetico specializzato in <strong>Ristoranti</strong> e <strong>Hotel</strong>.<br>Cos'è un <span style="color:#f78411">consulente energetico specializzato</span>?</div></td></tr><tr><td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;"><tbody><tr><td style="width:130px;"><a href="https://www.pilloledienergia.com/chi-sono/" target="_blank"><img height="auto" src="https://res.cloudinary.com/stefano75/image/upload/v1606257014/scopri-di-piu%CC%80_qznaio.jpg" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;" width="130"></a></td></tr></tbody></table></td></tr><tr><td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;"><div style="font-family:sans-serif;font-size:13px;line-height:16px;text-align:left;color:#000000;">Forse non sai che sono sempre più numerosi i <strong>Ristoranti</strong> e gli <strong>Hotel</strong> che scelgono di avere un consulente energetico esclusivo.</div></td></tr><tr><td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;"><div style="font-family:sans-serif;font-size:13px;line-height:16px;text-align:left;color:#000000;">Una persona specializzata che segue costantemente l'andamento dei loro consumi e che gli propone le migliori opportunità sul mercato luce e gas, un <span style="color:#f78411">servizio</span> che io offro <span style="color:#f78411">completamente gratuito</span>.</div></td></tr></table></div><!--[if mso | IE]></td></tr></table><![endif]--></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]--><div style="background:white;background-color:white;Margin:0px auto;max-width:600px;"><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:white;background-color:white;width:100%;"><tbody><tr><td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;vertical-align:top;"><!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:600px;" ><![endif]--><div class="mj-column-per-100 outlook-group-fix" style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%"><tbody><tr><td style="vertical-align:top;padding:0;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%"><tr><td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;"><div style="font-family:sans-serif;font-size:10px;line-height:16px;text-align:center;color:#525252;"><span style="color: #f78411;">PILLOLE DI ENERGIA &copy; 2020</span><br><strong>Stefano Frontini consulente energetico per ristoranti e hotel</strong><br><a href="https://www.pilloledienergia.com/">www.pilloledienergia.com</a><br><a href="mailto:stefano.frontini@con.repower.com">stefano.frontini@con.repower.com</a><br>cell: 335.103.03.01</div></td></tr><tr><td align="center" style="font-size:0px;padding:0;word-break:break-word;"><!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" ><tr><td><![endif]--><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="float:none;display:inline-table;"><tr><td style="padding:4px;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#3b5998;border-radius:3px;width:30px;"><tr><td style="font-size:0;height:30px;vertical-align:middle;width:30px;"><a href="https://www.facebook.com/sharer/sharer.php?u=https://www.facebook.com/stefanofrontiniconsulenteenergetico" target="_blank"><img height="30" src="https://www.mailjet.com/images/theme/v1/icons/ico-social/facebook.png" style="border-radius:3px;" width="30"></a></td></tr></table></td></tr></table><!--[if mso | IE]></td><td><![endif]--><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="float:none;display:inline-table;"><tr><td style="padding:4px;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#EB3323;border-radius:3px;width:30px;"><tr><td style="font-size:0;height:30px;vertical-align:middle;width:30px;"><a href="https://www.youtube.com/channel/UCR-O1aNnCvdtANr8Yf7h_RQ" target="_blank"><img height="30" src="https://www.mailjet.com/images/theme/v1/icons/ico-social/youtube.png" style="border-radius:3px;" width="30"></a></td></tr></table></td></tr></table><!--[if mso | IE]></td><td><![endif]--><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="float:none;display:inline-table;"><tr><td style="padding:4px;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#3f729b;border-radius:3px;width:30px;"><tr><td style="font-size:0;height:30px;vertical-align:middle;width:30px;"><a href="https://www.instagram.com/pilloledienergia/?hl=it" target="_blank"><img height="30" src="https://www.mailjet.com/images/theme/v1/icons/ico-social/instagram.png" style="border-radius:3px;" width="30"></a></td></tr></table></td></tr></table><!--[if mso | IE]></td><td><![endif]--><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="float:none;display:inline-table;"><tr><td style="padding:4px;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#0077b5;border-radius:3px;width:30px;"><tr><td style="font-size:0;height:30px;vertical-align:middle;width:30px;"><a href="https://www.linkedin.com/shareArticle?mini=true&url=https://www.linkedin.com/in/stefano-frontini/&title=&summary=&source=" target="_blank"><img height="30" src="https://www.mailjet.com/images/theme/v1/icons/ico-social/linkedin.png" style="border-radius:3px;" width="30"></a></td></tr></table></td></tr></table><!--[if mso | IE]></td></tr></table><![endif]--></td></tr></table></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><![endif]--></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><![endif]--></div></body></html>
`;

  const insufficiente = `
  <!doctype html><html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office"><head><title></title><!--[if !mso]><!-- --><meta http-equiv="X-UA-Compatible" content="IE=edge"><!--<![endif]--><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style type="text/css">#outlook a { padding:0; }
  .ReadMsgBody { width:100%; }
  .ExternalClass { width:100%; }
  .ExternalClass * { line-height:100%; }
  body { margin:0;padding:0;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%; }
  table, td { border-collapse:collapse;mso-table-lspace:0pt;mso-table-rspace:0pt; }
  img { border:0;height:auto;line-height:100%; outline:none;text-decoration:none;-ms-interpolation-mode:bicubic; }
  p { display:block;margin:13px 0; }</style><!--[if !mso]><!--><style type="text/css">@media only screen and (max-width:480px) {
    @-ms-viewport { width:320px; }
    @viewport { width:320px; }
  }</style><!--<![endif]--><!--[if mso]>
<xml>
<o:OfficeDocumentSettings>
  <o:AllowPNG/>
  <o:PixelsPerInch>96</o:PixelsPerInch>
</o:OfficeDocumentSettings>
</xml>
<![endif]--><!--[if lte mso 11]>
<style type="text/css">
  .outlook-group-fix { width:100% !important; }
</style>
<![endif]--><style type="text/css">@media only screen and (min-width:480px) {
.mj-column-per-100 { width:100% !important; max-width: 100%; }
.mj-column-px-400 { width:400px !important; max-width: 400px; }
}</style><style type="text/css">@media only screen and (max-width:480px) {
table.full-width-mobile { width: 100% !important; }
td.full-width-mobile { width: auto !important; }
}</style></head><body style="background-color:#f0f0f0;"><div style="background-color:#f0f0f0;"><!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]--><div style="background:white;background-color:white;Margin:0px auto;max-width:600px;"><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:white;background-color:white;width:100%;"><tbody><tr><td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;vertical-align:top;"><!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:600px;" ><![endif]--><div class="mj-column-per-100 outlook-group-fix" style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%"><tr><td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;"><tbody><tr><td style="width:550px;"><img height="auto" src="https://res.cloudinary.com/stefano75/image/upload/v1606126533/3_RISULTATI_insuf_t2duhc.jpg" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;" width="550"></td></tr></tbody></table></td></tr></table></div><!--[if mso | IE]></td></tr></table><![endif]--></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]--><div style="background:white;background-color:white;Margin:0px auto;max-width:600px;"><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:white;background-color:white;width:100%;"><tbody><tr><td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;vertical-align:top;"><!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:400px;" ><![endif]--><div class="mj-column-px-400 outlook-group-fix" style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%"><tr><td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;"><div style="font-family:sans-serif;font-size:13px;line-height:16px;text-align:left;color:#000000;"><strong><i>Ciao ${nome}</i>,<br>complimenti</strong> per aver dedicato del tempo all'analisi delle tue forniture.</div></td></tr><tr><td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;"><div style="font-family:sans-serif;font-size:13px;line-height:16px;text-align:left;color:#000000;">Questo breve <span style="color:#f78411">check-up</span> è solo l'inizio di un percorso per arrivare ad ottimizzare al massimo i tuoi costi e cosa altrettanto importante il tuo tempo. <strong>Non perdere l'occasione</strong> di sapere grazie a un'analisi approfondita e personalizzata - <span style="color:#f78411">gratuita e senza impegno</span> - come arrivare a raggiungere questo importante risultato per la tua attività.</div></td></tr><tr><td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;"><tbody><tr><td style="width:130px;"><a href="mailto:stefano.frontini@con.repower.com" target="_blank"><img height="auto" src="https://res.cloudinary.com/stefano75/image/upload/v1606256864/contattami_cgzkpc.jpg" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;" width="130"></a></td></tr></tbody></table></td></tr><tr><td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;"><div style="font-family:sans-serif;font-size:13px;line-height:16px;text-align:left;color:#000000;">Mi chiamo Stefano Frontini e da 15 anni sono un <strong>consulente</strong> energetico specializzato in <strong>Ristoranti</strong> e <strong>Hotel</strong>.<br>Cos'è un <span style="color:#f78411">consulente energetico specializzato</span>?</div></td></tr><tr><td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;"><tbody><tr><td style="width:130px;"><a href="https://www.pilloledienergia.com/chi-sono/" target="_blank"><img height="auto" src="https://res.cloudinary.com/stefano75/image/upload/v1606257014/scopri-di-piu%CC%80_qznaio.jpg" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;" width="130"></a></td></tr></tbody></table></td></tr><tr><td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;"><div style="font-family:sans-serif;font-size:13px;line-height:16px;text-align:left;color:#000000;">Forse non sai che sono sempre più numerosi i <strong>Ristoranti</strong> e gli <strong>Hotel</strong> che scelgono di avere un consulente energetico esclusivo.</div></td></tr><tr><td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;"><div style="font-family:sans-serif;font-size:13px;line-height:16px;text-align:left;color:#000000;">Una persona specializzata che segue costantemente l'andamento dei loro consumi e che gli propone le migliori opportunità sul mercato luce e gas, un <span style="color:#f78411">servizio</span> che io offro <span style="color:#f78411">completamente gratuito</span>.</div></td></tr></table></div><!--[if mso | IE]></td></tr></table><![endif]--></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]--><div style="background:white;background-color:white;Margin:0px auto;max-width:600px;"><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:white;background-color:white;width:100%;"><tbody><tr><td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;vertical-align:top;"><!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:600px;" ><![endif]--><div class="mj-column-per-100 outlook-group-fix" style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%"><tbody><tr><td style="vertical-align:top;padding:0;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%"><tr><td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;"><div style="font-family:sans-serif;font-size:10px;line-height:16px;text-align:center;color:#525252;"><span style="color: #f78411;">PILLOLE DI ENERGIA &copy; 2020</span><br><strong>Stefano Frontini consulente energetico per ristoranti e hotel</strong><br><a href="https://www.pilloledienergia.com/">www.pilloledienergia.com</a><br><a href="mailto:stefano.frontini@con.repower.com">stefano.frontini@con.repower.com</a><br>cell: 335.103.03.01</div></td></tr><tr><td align="center" style="font-size:0px;padding:0;word-break:break-word;"><!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" ><tr><td><![endif]--><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="float:none;display:inline-table;"><tr><td style="padding:4px;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#3b5998;border-radius:3px;width:30px;"><tr><td style="font-size:0;height:30px;vertical-align:middle;width:30px;"><a href="https://www.facebook.com/sharer/sharer.php?u=https://www.facebook.com/stefanofrontiniconsulenteenergetico" target="_blank"><img height="30" src="https://www.mailjet.com/images/theme/v1/icons/ico-social/facebook.png" style="border-radius:3px;" width="30"></a></td></tr></table></td></tr></table><!--[if mso | IE]></td><td><![endif]--><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="float:none;display:inline-table;"><tr><td style="padding:4px;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#EB3323;border-radius:3px;width:30px;"><tr><td style="font-size:0;height:30px;vertical-align:middle;width:30px;"><a href="https://www.youtube.com/channel/UCR-O1aNnCvdtANr8Yf7h_RQ" target="_blank"><img height="30" src="https://www.mailjet.com/images/theme/v1/icons/ico-social/youtube.png" style="border-radius:3px;" width="30"></a></td></tr></table></td></tr></table><!--[if mso | IE]></td><td><![endif]--><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="float:none;display:inline-table;"><tr><td style="padding:4px;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#3f729b;border-radius:3px;width:30px;"><tr><td style="font-size:0;height:30px;vertical-align:middle;width:30px;"><a href="https://www.instagram.com/pilloledienergia/?hl=it" target="_blank"><img height="30" src="https://www.mailjet.com/images/theme/v1/icons/ico-social/instagram.png" style="border-radius:3px;" width="30"></a></td></tr></table></td></tr></table><!--[if mso | IE]></td><td><![endif]--><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="float:none;display:inline-table;"><tr><td style="padding:4px;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#0077b5;border-radius:3px;width:30px;"><tr><td style="font-size:0;height:30px;vertical-align:middle;width:30px;"><a href="https://www.linkedin.com/shareArticle?mini=true&url=https://www.linkedin.com/in/stefano-frontini/&title=&summary=&source=" target="_blank"><img height="30" src="https://www.mailjet.com/images/theme/v1/icons/ico-social/linkedin.png" style="border-radius:3px;" width="30"></a></td></tr></table></td></tr></table><!--[if mso | IE]></td></tr></table><![endif]--></td></tr></table></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><![endif]--></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><![endif]--></div></body></html>
`;

  const sufficiente = `
  <!doctype html><html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office"><head><title></title><!--[if !mso]><!-- --><meta http-equiv="X-UA-Compatible" content="IE=edge"><!--<![endif]--><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style type="text/css">#outlook a { padding:0; }
  .ReadMsgBody { width:100%; }
  .ExternalClass { width:100%; }
  .ExternalClass * { line-height:100%; }
  body { margin:0;padding:0;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%; }
  table, td { border-collapse:collapse;mso-table-lspace:0pt;mso-table-rspace:0pt; }
  img { border:0;height:auto;line-height:100%; outline:none;text-decoration:none;-ms-interpolation-mode:bicubic; }
  p { display:block;margin:13px 0; }</style><!--[if !mso]><!--><style type="text/css">@media only screen and (max-width:480px) {
    @-ms-viewport { width:320px; }
    @viewport { width:320px; }
  }</style><!--<![endif]--><!--[if mso]>
<xml>
<o:OfficeDocumentSettings>
  <o:AllowPNG/>
  <o:PixelsPerInch>96</o:PixelsPerInch>
</o:OfficeDocumentSettings>
</xml>
<![endif]--><!--[if lte mso 11]>
<style type="text/css">
  .outlook-group-fix { width:100% !important; }
</style>
<![endif]--><style type="text/css">@media only screen and (min-width:480px) {
.mj-column-per-100 { width:100% !important; max-width: 100%; }
.mj-column-px-400 { width:400px !important; max-width: 400px; }
}</style><style type="text/css">@media only screen and (max-width:480px) {
table.full-width-mobile { width: 100% !important; }
td.full-width-mobile { width: auto !important; }
}</style></head><body style="background-color:#f0f0f0;"><div style="background-color:#f0f0f0;"><!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]--><div style="background:white;background-color:white;Margin:0px auto;max-width:600px;"><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:white;background-color:white;width:100%;"><tbody><tr><td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;vertical-align:top;"><!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:600px;" ><![endif]--><div class="mj-column-per-100 outlook-group-fix" style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%"><tr><td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;"><tbody><tr><td style="width:550px;"><img height="auto" src="https://res.cloudinary.com/stefano75/image/upload/v1606126533/3_RISULTATI_suff_cfewzl.jpg" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;" width="550"></td></tr></tbody></table></td></tr></table></div><!--[if mso | IE]></td></tr></table><![endif]--></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]--><div style="background:white;background-color:white;Margin:0px auto;max-width:600px;"><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:white;background-color:white;width:100%;"><tbody><tr><td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;vertical-align:top;"><!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:400px;" ><![endif]--><div class="mj-column-px-400 outlook-group-fix" style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%"><tr><td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;"><div style="font-family:sans-serif;font-size:13px;line-height:16px;text-align:left;color:#000000;"><strong><i>Ciao ${nome}</i>,<br>complimenti</strong> per aver dedicato del tempo all'analisi delle tue forniture.</div></td></tr><tr><td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;"><div style="font-family:sans-serif;font-size:13px;line-height:16px;text-align:left;color:#000000;">Questo breve <span style="color:#f78411">check-up</span> è solo l'inizio di un percorso per arrivare ad ottimizzare al massimo i tuoi costi e cosa altrettanto importante il tuo tempo. <strong>Non perdere l'occasione</strong> di sapere grazie a un'analisi approfondita e personalizzata - <span style="color:#f78411">gratuita e senza impegno</span> - come arrivare a raggiungere questo importante risultato per la tua attività.</div></td></tr><tr><td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;"><tbody><tr><td style="width:130px;"><a href="mailto:stefano.frontini@con.repower.com" target="_blank"><img height="auto" src="https://res.cloudinary.com/stefano75/image/upload/v1606256864/contattami_cgzkpc.jpg" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;" width="130"></a></td></tr></tbody></table></td></tr><tr><td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;"><div style="font-family:sans-serif;font-size:13px;line-height:16px;text-align:left;color:#000000;">Mi chiamo Stefano Frontini e da 15 anni sono un <strong>consulente</strong> energetico specializzato in <strong>Ristoranti</strong> e <strong>Hotel</strong>.<br>Cos'è un <span style="color:#f78411">consulente energetico specializzato</span>?</div></td></tr><tr><td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;"><tbody><tr><td style="width:130px;"><a href="https://www.pilloledienergia.com/chi-sono/" target="_blank"><img height="auto" src="https://res.cloudinary.com/stefano75/image/upload/v1606257014/scopri-di-piu%CC%80_qznaio.jpg" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;" width="130"></a></td></tr></tbody></table></td></tr><tr><td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;"><div style="font-family:sans-serif;font-size:13px;line-height:16px;text-align:left;color:#000000;">Forse non sai che sono sempre più numerosi i <strong>Ristoranti</strong> e gli <strong>Hotel</strong> che scelgono di avere un consulente energetico esclusivo.</div></td></tr><tr><td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;"><div style="font-family:sans-serif;font-size:13px;line-height:16px;text-align:left;color:#000000;">Una persona specializzata che segue costantemente l'andamento dei loro consumi e che gli propone le migliori opportunità sul mercato luce e gas, un <span style="color:#f78411">servizio</span> che io offro <span style="color:#f78411">completamente gratuito</span>.</div></td></tr></table></div><!--[if mso | IE]></td></tr></table><![endif]--></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]--><div style="background:white;background-color:white;Margin:0px auto;max-width:600px;"><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:white;background-color:white;width:100%;"><tbody><tr><td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;vertical-align:top;"><!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:600px;" ><![endif]--><div class="mj-column-per-100 outlook-group-fix" style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%"><tbody><tr><td style="vertical-align:top;padding:0;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%"><tr><td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;"><div style="font-family:sans-serif;font-size:10px;line-height:16px;text-align:center;color:#525252;"><span style="color: #f78411;">PILLOLE DI ENERGIA &copy; 2020</span><br><strong>Stefano Frontini consulente energetico per ristoranti e hotel</strong><br><a href="https://www.pilloledienergia.com/">www.pilloledienergia.com</a><br><a href="mailto:stefano.frontini@con.repower.com">stefano.frontini@con.repower.com</a><br>cell: 335.103.03.01</div></td></tr><tr><td align="center" style="font-size:0px;padding:0;word-break:break-word;"><!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" ><tr><td><![endif]--><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="float:none;display:inline-table;"><tr><td style="padding:4px;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#3b5998;border-radius:3px;width:30px;"><tr><td style="font-size:0;height:30px;vertical-align:middle;width:30px;"><a href="https://www.facebook.com/sharer/sharer.php?u=https://www.facebook.com/stefanofrontiniconsulenteenergetico" target="_blank"><img height="30" src="https://www.mailjet.com/images/theme/v1/icons/ico-social/facebook.png" style="border-radius:3px;" width="30"></a></td></tr></table></td></tr></table><!--[if mso | IE]></td><td><![endif]--><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="float:none;display:inline-table;"><tr><td style="padding:4px;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#EB3323;border-radius:3px;width:30px;"><tr><td style="font-size:0;height:30px;vertical-align:middle;width:30px;"><a href="https://www.youtube.com/channel/UCR-O1aNnCvdtANr8Yf7h_RQ" target="_blank"><img height="30" src="https://www.mailjet.com/images/theme/v1/icons/ico-social/youtube.png" style="border-radius:3px;" width="30"></a></td></tr></table></td></tr></table><!--[if mso | IE]></td><td><![endif]--><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="float:none;display:inline-table;"><tr><td style="padding:4px;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#3f729b;border-radius:3px;width:30px;"><tr><td style="font-size:0;height:30px;vertical-align:middle;width:30px;"><a href="https://www.instagram.com/pilloledienergia/?hl=it" target="_blank"><img height="30" src="https://www.mailjet.com/images/theme/v1/icons/ico-social/instagram.png" style="border-radius:3px;" width="30"></a></td></tr></table></td></tr></table><!--[if mso | IE]></td><td><![endif]--><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="float:none;display:inline-table;"><tr><td style="padding:4px;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#0077b5;border-radius:3px;width:30px;"><tr><td style="font-size:0;height:30px;vertical-align:middle;width:30px;"><a href="https://www.linkedin.com/shareArticle?mini=true&url=https://www.linkedin.com/in/stefano-frontini/&title=&summary=&source=" target="_blank"><img height="30" src="https://www.mailjet.com/images/theme/v1/icons/ico-social/linkedin.png" style="border-radius:3px;" width="30"></a></td></tr></table></td></tr></table><!--[if mso | IE]></td></tr></table><![endif]--></td></tr></table></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><![endif]--></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><![endif]--></div></body></html>
`;
  const domande = [
    domanda1,
    domanda2,
    domanda3,
    domanda4,
    domanda5,
    domanda6,
    domanda7,
    domanda8,
    domanda9,
    domanda10,
  ];

  console.log("domande", domande);

  function calcolaPunteggio(elem, index) {
    if (index === 7) {
      if (elem === "no") {
        return 1;
      } else {
        return 0;
      }
    } else {
      if (elem === "si") {
        return 1;
      } else {
        return 0;
      }
    }
  }

  const punteggio = domande.map(calcolaPunteggio);

  console.log("punteggio", punteggio);

  function getSum(total, num) {
    return total + num;
  }

  const punteggioTotale = punteggio.reduce(getSum, 0);

  console.log("punteggioTotale", punteggioTotale);

  const risultatoCheckup = (score, b, s, i) => {
    if (+score < 6) {
      return i;
    } else if (+score < 9 && +score > 5) {
      return s;
    } else {
      return b;
    }
  };

  const created = new Date();

  const variables = {
    created,
    form,
    email,
    nome,
    domanda1,
    domanda2,
    domanda3,
    domanda4,
    domanda5,
    domanda6,
    domanda7,
    domanda8,
    domanda9,
    domanda10,
    punteggioTotale,
    iva,
    accise,
  };

  const CREATE_LINK = `mutation($created: String, $form: String, $email: String, $nome: String, $domanda1: String, $domanda2: String, $domanda3: String, $domanda4: String, $domanda5: String, $domanda6: String, $domanda7: String, $domanda8: String, $domanda9: String, $domanda10: String, $punteggioTotale: Int, $iva: Boolean, $accise: Boolean) {
    createSubmission(data: {created:$created, form:$form, nome:$nome, email:$email, domanda1:$domanda1,domanda2:$domanda2,domanda3:$domanda3,domanda4:$domanda4,domanda5:$domanda5,domanda6:$domanda6,domanda7:$domanda7,domanda8:$domanda8,domanda9:$domanda9,domanda10:$domanda10, punteggio:$punteggioTotale, iva:$iva, accise:$accise }){
      created,
      form,
      email,
      nome,
      domanda1,
      domanda2,
      domanda3,
      domanda4,
      domanda5,
      domanda6,
      domanda7,
      domanda8,
      domanda9,
      domanda10,
      punteggio,
      iva,
      accise
    }

  }`;

  const { data } = await axios({
    url: "https://graphql.fauna.com/graphql",
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.FAUNA_SECRET_KEY}`,
    },
    data: {
      query: CREATE_LINK,
      variables,
    },
  });

  console.log("fauna_data", data);

  try {
    const info = await transporter.sendMail({
      from: '"Stefano Frontini" <info@pilloledienergia.com>',
      to: email,
      bcc: "stefano.frontini@con.repower.com",
      subject: `Il tuo report è pronto ${nome}!`,
      html: risultatoCheckup(
        punteggioTotale,
        buono,
        sufficiente,
        insufficiente
      ),
    });
    console.log(`Report with Id: ${info.messageId} sent to: ${email}`);

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: `Corri a scoprire i risultati all'indirizzo email:<br /> ${email} !`,
      }),
    };
  } catch (err) {
    console.error(err);
    return {
      statusCode: 500,
      body: JSON.stringify({
        message:
          "Ops...c'è stato un errore.<br /> Contattami all'indirizzo email:<br /> stefano.frontini@con.repower<br /> per avere il risultato del check-up",
      }),
    };
  }
};

//const report2 = Buffer.from(imageBuonLavoro);

/* const report = Buffer.from(
      new jsPDF()
        .setFontSize(22)
        .text("Risultato del check-up", 105, 80, null, null, "center")
        .addImage(imageBuonLavoro, "JPEG", 15, 10, 180, 250)
        .output("arraybuffer")
    ); */

/* filename: `report-${new Date().toDateString()}.pdf`,
          content: report,
          contentType: "application/pdf", */

/* if (!body.email) {
    console.log("missing email");
    return {
      statusCode: 400,
      body: JSON.stringify({
        error: "missing email",
      }),
    };
  }

  if (!mailChimpAPI) {
    console.log("missing mailChimpAPI key");
    return {
      statusCode: 400,
      body: JSON.stringify({
        error: "missing mailChimpAPI key",
      }),
    };
  }

  if (!mailChimpListID) {
    console.log("missing mailChimpListID key");
    return {
      statusCode: 400,
      body: JSON.stringify({
        error: "missing mailChimpListID key",
      }),
    };
  } */

/*   const dataCheck = {
    email_address: email,
    status_if_new: "pending",
    merge_fields: {
      MERGE1: name,
      MERGE11: domanda1,
      MERGE12: domanda2,
      MERGE13: domanda3,
      MERGE14: domanda4,
      MERGE15: domanda5,
      MERGE16: domanda6,
      MERGE17: domanda7,
      MERGE18: domanda8,
      MERGE19: domanda9,
      MERGE20: domanda10,
      MERGE5: si,
      MERGE10: no,
    },
  };

  const subscriber = JSON.stringify(dataCheck);
  console.log("Sending data to mailchimp", subscriber);

  // Subscribe an email
  const run = async () => {
    const response = await mailchimp.lists.setListMember(
      mailChimpListID,
      "subscriber_hash",
      dataCheck
    );
    console.log(
      `Successfully added contact as an audience member. The contact's id is ${
        response.id
      }.`
    );
    console.log("response-data:", response.data);
    return `Successfully added contact as an audience member. The contact's id is ${
      response.id
    }.`;
  };
  const call = run();
  return {
    statusCode: 200,
    body: JSON.stringify(call),
  }; */

/*  axios({
    method: "post",
    url: "https://pilloledienergia.us3.list-manage.com/subscribe/post",
    data: subscriber,
    auth: {
      username: "apikey", // any value will work
      password: mailChimpAPI,
    },
  })
    .then(function(response) {
      console.log(`status:${response.status}`);
      console.log(`data:${response.data}`);
      console.log(`headers:${response.headers}`);

      if (
        response.headers["content-type"] === "application/x-www-form-urlencoded"
      ) {
        // Do redirect for non JS enabled browsers
        return {
          statusCode: 302,
          headers: {
            Location: "/thanks.html",
            "Cache-Control": "no-cache",
          },
          body: JSON.stringify({}),
        };
      }

      // Return data to AJAX request
      return {
        statusCode: 200,
        body: JSON.stringify({ emailAdded: true }),
      };
    })
    .catch(function(error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
        return { statusCode: 500, body: JSON.stringify(error.response) };
      } else if (error.request) {
        // The request was made but no response was received
        console.log(error.request);
        return { statusCode: 500, body: JSON.stringify(error.request) };
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log("Error", error.message);
        return { statusCode: 500, body: JSON.stringify(error.message) };
      }
      console.log(error.config);
    }); */
/* const GET_SUBMISSIONS = `query {
    allSubmissions {
      data {
        form
        nome
        email
        domanda1
        domanda2
        domanda3
        domanda4
        domanda5
        domanda6
        domanda7
        domanda8
        domanda9
        domanda10
        numerosi
        numerono
        iva
        accise
      }
    }
  }`;

  const { data } = await Axios({
    url: "https://graphql.fauna.com/graphql",
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.FAUNA_SECRET_KEY}`,
    },
    data: {
      query: GET_SUBMISSIONS,
      variables: {},
    },
  }); */

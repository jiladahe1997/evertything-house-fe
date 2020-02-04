module.exports = async (ctx, next) => {
  if(!ctx.cookies.get('_j_token') && process.env.NODE_ENV !== 'local'){
    ctx.redirect("https://graph.qq.com/oauth2.0/authorize?response_type=code&client_id=101833914&redirect_uri=https://jiladahe1997.cn/qqlogin/callback")
  } else {
    await next()
  }
}
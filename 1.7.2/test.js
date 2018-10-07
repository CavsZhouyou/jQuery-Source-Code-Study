let quickExpr = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
  selector = "<div#test>",
  match = quickExpr.exec(selector),
  dom = $(1)


console.log(dom);
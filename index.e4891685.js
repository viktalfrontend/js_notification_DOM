var e=function(e,t,n,a,o){var i=document.createElement("div");i.className="notification ".concat(o),i.style.top="".concat(e,"px"),i.style.right="".concat(t,"px");var c=document.createElement("h2");c.className="title",c.textContent=n;var s=document.createElement("p");s.textContent=a,i.append(c),i.append(s),document.body.append(i),setTimeout(function(){i.remove()},2e3)};e(10,10,"Title of Success message","Message example.\n Notification should contain title and description.","success"),e(150,10,"Title of Error message","Message example.\n Notification should contain title and description.","error"),e(290,10,"Title of Warning message","Message example.\n Notification should contain title and description.","warning");
//# sourceMappingURL=index.e4891685.js.map

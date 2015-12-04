var dialog = {
  show: function(type, message, success, fail){
    dialog.__success = success;
    dialog.__fail= fail;

    document.body.innerHTML += 
        "<div class='overlay " + type + "'>" +
          "<div class='dialog'>" +
            "<div class='message'>" + message + "</div>" +
            "<input type='text'>" +
            "<div class='bWrapper'>" +
              "<a href='javascript:dialog.cancel()' class='button cancel'>Cancel</a>" +
              "<a href='javascript:dialog.done()' class='button done'>OK</a>" +
            "</div>"+
          "</div>"+
        "</div>";
    $(".overlay input").focus()
    $(".overlay .dialog").css({'opacity':1, 'margin-top': "200px",'color':'white', "background": "black"});
  },
  __success: null,
  __fail: null,
  value: "",
  done: function(){
    dialog.value = $(".overlay input").val()
    $(".overlay").remove();
    if(dialog.__success){
      dialog.__success();
    }
  },
  cancel: function(){
    $(".overlay").remove();
    if(dialog.__fail){
      dialog.__fail();
    }
  }
}


function showAlert(text)
{
  if (!text)
    text = ""
  dialog.show("alert",text);
}

function showConfirm(text)
{
  var successCallback = function(){ showAlert("OK clicked") }
  var failureCallback = function(){ showAlert("Cancel clicked") }

  if (!text)
    text = ""
  dialog.show("confirm", text, successCallback, failureCallback);
}

function showPrompt(text)
{
  var successCallback = function(){ showAlert(dialog.value) }
  var failureCallback = function(){}

  if (!text)
    text = ""

  dialog.show("prompt", text, successCallback, failureCallback);
}
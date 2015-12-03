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


function showAlert()
{
  dialog.show("alert", "This is an alert");
}

function showConfirm()
{
  var successCallback = function(){ alert("OK clicked") }
  var failureCallback = function(){ alert("Cancel clicked") }
  dialog.show("confirm", "This is an confirmation", successCallback, failureCallback);
}

function showPrompt()
{
  var successCallback = function(){ alert(dialog.value) }
  var failureCallback = function(){}
  dialog.show("prompt", "This is an prompt", successCallback, failureCallback);
}
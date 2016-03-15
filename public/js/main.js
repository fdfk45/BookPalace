var canvas=document.querySelectorAll(".canvas"),overlay=$(".overlay"),loginDialog=$(".login-dialog"),SignupDialog=$(".signup-dialog"),bookDialog=$(".book-add-dialog");$("#sign-in").click(function(){overlay.show(),loginDialog.slideDown()}),$(".settings").click(function(){$(".settings-popup").slideToggle()}),$("#sign-up").click(function(){overlay.show(),SignupDialog.slideDown()}),$(".sign-up-btn").click(function(){overlay.show(),SignupDialog.slideDown()}),$(".no-account-btn").click(function(){loginDialog.slideUp(),SignupDialog.slideDown()}),$(".have-account-btn").click(function(){loginDialog.slideDown(),SignupDialog.slideUp()}),$(document).click(function(e){$(e.target).hasClass("fa fa-cog fa-2x")||$(e.target).hasClass("settings")||$(".settings-popup").is(":visible")&&$(".settings-popup").slideUp()}),$(".close-icon").click(function(){loginDialog.is(":visible")?(overlay.hide(),$(".login-email-password-error, .login-email-error, .login-password-error,.email-invalid-error,.password-invalid-error,.general-error").hide(),loginDialog.slideUp()):SignupDialog.is(":visible")?(overlay.hide(),$(".login-firstname-email-password-error, .login-firstname-error,.login-email-error,.login-password-error,.email-exist-error,.general-error").hide(),SignupDialog.slideUp()):bookDialog.is(":visible")&&(overlay.hide(),$(".book-name-error").hide(),$(".book-name").val(""),bookDialog.slideUp())}),$(".top").click(function(){$("html,body").animate({scrollTop:$(".books-container").offset().top},1e3)}),$(document).scroll(function(){$(".book-add-dialog").css("top",$(document).scrollTop()),$(document).scrollTop()>=1530?$(".top").show():$(".top").hide()}),$(document).on("click",".hover-bg",function(){$(".overlay").show(),$(".book-add-dialog").slideDown(),$(".book-add-dialog").css("top",$(document).scrollTop())}),$(".update-btn").click(function(){var e=$(".update-profile-name").val(),o=$(".update-profile-city").val(),r=$(".update-profile-state").val();""===e?$(".update-name-error").show():($(".overlay").show(),$(".update-name-error").hide(),$(".loader-container").show(),$(".loader-message").show(),$(".loader-message").html("Please wait, updating profile..."),$.ajax({method:"POST",url:"/update",data:{updateName:e,updateCity:o,updateState:r},success:function(e){$(".loader").hide(),$(".loader-message").css("color","green"),$(".loader-message").html("Profile Updated Successfully!"),$(".close-btn").show()},error:function(e){$(".loader").hide(),$(".loader-message").css("color","red"),$(".loader-message").html("Something went wrong, please try again!"),$(".close-btn").show()}}))}),$(document).on("click",".add-book-btn",function(){var e=($(this),$(".book-name").val());""===e?$(".book-name-error").show():($(".book-name-error").hide(),$(".book-add-dialog").hide(),$(".loader-container").show(),$(".loader-message").show(),$(".overlay").show(),$(".loader-message").html("Please wait, adding book..."),$.ajax({method:"POST",url:"/addbook",data:{bookName:e},success:function(e){$(".loader").hide(),$(".book-name").val(""),$(".loader-message").css("color","green"),$(".loader-message").html("Book Added Successfully!"),$(".close-btn").show(),$(".embeded-result").html(e)},error:function(e){$(".loader").hide(),$(".loader-message").css("color","red"),$(".loader-message").html("Something went wrong, please try again!"),$(".close-btn").show()}}))}),$(".request-book-btn").click(function(){var e=$(this).attr("data-userId"),o=$(this).attr("data-bookName"),r=$(this).attr("data-bookId"),a=$(this);$(".loader-container").show(),$(".loader-message").show(),$(".overlay").show(),$(".loader-message").html("Please wait, making request..."),$.ajax({method:"POST",url:"/bookrequest",data:{userId:e,bookName:o,bookId:r},success:function(e){$(".loader").hide(),$(".loader-message").css("color","green"),$(".loader-message").html("Request Made, Waiting Approval!"),$(".close-btn").show(),a.prop("disabled",!0),a.html("Waiting Approval"),a.next().show()},error:function(e){$(".loader").hide(),$(".loader-message").css("color","red"),$(".loader-message").html("Something went wrong, please try again!"),$(".close-btn").show()}})}),$(".cancel-request-btn").click(function(){var e=$(this).attr("data-userId"),o=$(this).attr("data-bookId"),r=$(this);$(".loader-container").show(),$(".loader-message").show(),$(".overlay").show(),$(".loader-message").html("Please wait, canceling request..."),$.ajax({method:"POST",url:"/cancelrequest",data:{userId:e,bookId:o},success:function(e){$(".loader").hide(),$(".loader-message").css("color","green"),$(".loader-message").html("Request Cancel!"),$(".close-btn").show(),r.hide(),$(".request-book-btn").prop("disabled",!1),$(".request-book-btn").html("Request Book")},error:function(e){$(".loader").hide(),$(".loader-message").css("color","red"),$(".loader-message").html("Something went wrong, please try again!"),$(".close-btn").show()}})}),$(".decline-request").click(function(){var e=$(this).attr("data-userId"),o=$(this).attr("data-bookId"),r=$(this);$(".loader-container").show(),$(".loader-message").show(),$(".overlay").show(),$(".loader-message").html("Please wait, canceling request..."),$.ajax({method:"POST",url:"/declinerequest",data:{userId:e,bookId:o},success:function(e){$(".loader").hide(),$(".loader-message").css("color","green"),$(".loader-message").html("Request Cancel!"),$(".close-btn").show(),r.parent().hide()},error:function(e){$(".loader").hide(),$(".loader-message").css("color","red"),$(".loader-message").html("Something went wrong, please try again!"),$(".close-btn").show()}})}),$(".accept-request").click(function(){var e=$(this).attr("data-userId"),o=$(this).attr("data-bookId"),r=$(this);$(".loader-container").show(),$(".loader-message").show(),$(".overlay").show(),$(".loader-message").html("Please wait, approving request..."),$.ajax({method:"POST",url:"/acceptrequest",data:{userId:e,bookId:o},success:function(e){$(".loader").hide(),$(".loader-message").css("color","green"),$(".loader-message").html("Request Approve!"),$(".close-btn").show(),r.parent().hide()},error:function(e){$(".loader").hide(),$(".loader-message").css("color","red"),$(".loader-message").html("Something went wrong, please try again!"),$(".close-btn").show()}})}),$(".login-btn").click(function(e){var o=$("#login-email").val(),r=$("#login-pword").val();""===o&&""===r?($(".login-email-password-error").show(),$(".login-email-error, .login-password-error").hide()):""===o?($(".login-email-error").show(),$(".login-email-password-error, .login-password-error").hide()):""===r?($(".login-password-error").show(),$(".login-email-password-error, .login-email-error").hide()):""!==o&&""!==r&&($(".login-email-password-error, .login-email-error, .login-password-error,.email-invalid-error,.password-invalid-error,.general-error").hide(),$(".login-btn").html("Logging In..."),$(".login-btn").prop("disabled",!0),$.ajax({method:"POST",url:"/login",data:{email:o,password:r},success:function(e){0===parseInt(e.error)?($(".login-btn").html("Log In"),$(".login-btn").prop("disabled",!1),$(".email-invalid-error").show(),$(".password-invalid-error").hide()):1===parseInt(e.error)?($(".login-btn").html("Log In"),$(".login-btn").prop("disabled",!1),$(".password-invalid-error").show(),$(".email-invalid-error").hide()):($(".password-invalid-error").hide(),$(".email-invalid-error").hide(),window.location.href="/mybooks")},error:function(e){e&&($(".login-btn").html("Log In"),$(".login-btn").prop("disabled",!1),$(".password-invalid-error").hide(),$(".email-invalid-error").hide(),$(".general-error").show())}}))}),$(".signup-btn").click(function(){var e=$("#signup-fname").val(),o=$("#signup-email").val(),r=$("#signup-pword").val();""===e&&""===r&&""===o?($(".login-firstname-email-password-error").show(),$(".login-firstname-error, .login-email-error,.login-password-error").hide()):""===e?($(".login-firstname-error").show(),$(".login-firstname-email-password-error, .login-email-error,.login-password-error").hide()):""===o?($(".login-email-error").show(),$(".login-firstname-email-password-error, .login-firstname-error,.login-password-error").hide()):""===r?($(".login-password-error").show(),$(".login-firstname-email-password-error, .login-firstname-error,.login-email-error").hide()):""!==e&&""!==r&&""!==o&&($(".login-firstname-email-password-error, .login-firstname-error,.login-email-error,.login-password-error,.email-exist-error,.general-error").hide(),$(".signup-btn").html("Signing Up..."),$(".signup-btn").prop("disabled",!0),$.ajax({method:"POST",url:"/signup",data:{uname:e[0].toUpperCase()+e.substring(1,e.length),email:o,password:r},success:function(e){0===parseInt(e.error)?($(".signup-btn").html("Sign Up"),$(".signup-btn").prop("disabled",!1),$(".email-exist-error").show()):($(".email-exist-error").hide(),window.location.href="/mybooks")},error:function(e){e&&($(".signup-btn").html("Sign Up"),$(".signup-btn").prop("disabled",!1),$(".email-exist-error").hide(),$(".general-error").show())}}))}),$(".close-btn").click(function(){$(".loader").show(),$(".loader-container").hide(),$(".loader-message").css("color","#000"),$(".loader-message").hide(),$(".overlay").hide(),$(".loader-message").html(""),$(".close-btn").hide()}),$(".logout").click(function(e){$.ajax({method:"GET",url:"/logout",success:function(){window.location.href="/"}})});
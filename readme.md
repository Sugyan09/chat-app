# handel errors
i expect sugyan to handel the errors ,rather than showing a alert i want the error to directly showup in the login form 
known errors are :
    1.user closes the login popup without logging in
    2.when user tries to signup with a accont that is already logged in:
        note:if you use a google account , the email linked to that google account cannot be used to create a new account 
    view line 60 in fb-link for handeling error differently
    3.when user tries to lofin with wrong email and password
    view line 78 for wrong email and 80 for wrong passowrd

# login check
the porgramme checks if teh user is logged in and redirects user to main page 'aferlogin.html'
the only plane this page is used is in line 21 of fblink file 
* the code is currently commented out (it will automatically redirect to the next page which would be very annoying for you)
import User from '../models/Users';
import passport from "passport";
import random from 'string-random';

export const renderSignUpForm = (req, res) => res.render("signup", {layout:'main_index', title: "Registrarse"});

export const signupPOST = async (req, res) => {
    let errors = [];
    const uuid = random(6);
    const { username, email, password, confirm_password, referral_code } = req.body;
    if (password != confirm_password) {
      errors.push({ text: "Passwords do not match." });
    }
    if (password.length < 4) {
      errors.push({ text: "Passwords must be at least 4 characters." });
    }
    if (errors.length > 0) {
      res.render("signup", {
        errors,
        username,
        email,
        password,
        confirm_password,
        referral_code,
      });
    } else {
      // Look for email coincidence
      const emailUser = await User.findOne({ email: email });
      const usernameUser = await User.findOne({ username: username });
      if (emailUser) {
        req.flash("error_msg", "El correo electrónico ya está en uso.");
        res.redirect("/signup");
      } else if (usernameUser){
        req.flash("error_msg", "El nombre de usuario ya está en uso.");
        res.redirect("/signup");
      } else {
        // Saving a New User
        const newUser = new User({ username, email, password, referral_code, uuid });
        newUser.password = await newUser.encryptPassword(password);
        await newUser.save()
        req.flash("success_msg", "Inicie sesión para continuar");
        res.redirect("/login");
      }
    }
  };

export const renderSigninForm = (req, res) => res.render("login", {layout:'main_index', title: "Iniciar sesión"});

export const signinPOST = passport.authenticate('local', {
  successRedirect: "/dashboard",
  failureRedirect: "/login",
  failureFlash: true,
});

export const logout = (req, res) => {
  req.logout();
  req.flash("success_msg", "Se ha cerrado su sesión.");
  res.redirect("/login");
};

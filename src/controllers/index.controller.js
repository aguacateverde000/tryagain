import User from '../models/Users';

export const renderIndex = (req, res) => {
  res.render("index", {layout:'main_index', title: "Tradingusd | Líderes Globales en USDT"});
};
  
export const renderPrivacy = (req, res) => {
  res.render("privacy", {layout:'main_index', title: "Políticas de Privacidad | Tradingusd"});
};
  
export const renderLegal = (req, res) => {
  res.render("legal", {layout:'main_index', title: "Legal | Tradingusd"});
};

export const renderCookies = (req, res) => {
  res.render("cookies", {layout:'main_index', title: "Cookies | Tradingusd"});
};
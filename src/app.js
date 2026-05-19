import { useState, useEffect } from "react";

const USERS = [
{ id: "admin", password: "admin123", name: "Administrateur" },
{ id: "david", password: "david2024", name: "David Sonigo" },
];

const MATERIEL_OPTIONS = [
"Panneaux solaires",
"Ballon thermodynamique",
"Pompe à chaleur",
"Climatisation",
"Isolation",
"Poêle à granulés",
"Autre",
];

const initialForm = {
nom: "",
prenom: "",
codePostal: "",
ville: "",
materiel: "",
prixVendu: "",
surcout: "",
vendeur: "",
commissionVendeur: "",
telepro: "",
commissionTelepro: "",
numeroFacture: "",
dateAppelFacturation: "",
installateur: "",
desinstalle: "",
litige: "",
};

function LoginPage({ onLogin, error }) {
const [id, setId] = useState("");
const [pwd, setPwd] = useState("");
const handleSubmit = () => onLogin(id, pwd);
return (
<div style={styles.loginWrap}>
<div style={styles.loginCard}>
<div style={styles.loginLogo}>
<svg width="44" height="44" viewBox="0 0 44 44" fill="none">
<rect width="44" height="44" rx="12" fill="#1a1a2e"/>
<path d="M10 22 L22 10 L34 22 L22 34 Z" fill="none" stroke="#e8b04b" strokeWidth="2.5"/>
<circle cx="22" cy="22" r="4" fill="#e8b04b"/>
</svg>
</div>
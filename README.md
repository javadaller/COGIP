# API Documentation

## Users

- **GET /api/users/getAllUsers** : Récupère tous les utilisateurs. Aucune entrée requise. Nécessite une authentification.

- **GET /api/users/loged** : Vérifie si l'utilisateur est connecté. Aucune entrée requise.

- **POST /api/users/register** : Enregistre un nouvel utilisateur. Les données de l'utilisateur (`email`, `password`, `first_name`) doivent être fournies dans le corps de la requête. Toutes les entrées sont obligatoires.

- **POST /api/users/login** : Connecte un utilisateur. Les données de l'utilisateur (`email`, `password`) doivent être fournies dans le corps de la requête. Toutes les entrées sont obligatoires.

- **GET /api/users/logout** : Déconnecte l'utilisateur. Aucune entrée requise. Nécessite une authentification.

- **PUT /api/users/:id/promote** : Promouvoit un utilisateur au rôle d'administrateur. L'ID de l'utilisateur doit être fourni dans l'URL. Aucune autre entrée requise. Nécessite une authentification et des droits d'administration.

- **PUT /api/users/:id/demote** : Rétrograde un utilisateur au rôle d'utilisateur standard. L'ID de l'utilisateur doit être fourni dans l'URL. Aucune autre entrée requise. Nécessite une authentification et des droits d'administration.

## Invoices

- **PUT /api/invoices/:id** : Modifie une facture existante. L'ID de la facture doit être fourni dans l'URL. Les données de la facture (`ref`, `company_ID`) doivent être fournies dans le corps de la requête. Toutes les entrées sont obligatoires. Nécessite une authentification.

- **POST /api/invoices** : Crée une nouvelle facture. Les données de la facture (`ref`, `company_ID`) doivent être fournies dans le corps de la requête. Toutes les entrées sont obligatoires. Nécessite une authentification.

- **DELETE /api/invoices/:id** : Supprime une facture existante. L'ID de la facture doit être fourni dans l'URL. Aucune autre entrée requise. Nécessite une authentification.

- **GET /api/invoices/:id** : Récupère une facture spécifique. L'ID de la facture doit être fourni dans l'URL. Aucune autre entrée requise. Nécessite une authentification.

## Contacts

- **PUT /api/contacts/:id** : Modifie un contact existant. L'ID du contact doit être fourni dans l'URL. Les données du contact (`name`, `email`, `phone`, `company_ID`) doivent être fournies dans le corps de la requête. Toutes les entrées sont obligatoires. Nécessite une authentification.

- **POST /api/contacts** : Crée un nouveau contact. Les données du contact (`name`, `email`, `phone`, `company_ID`) doivent être fournies dans le corps de la requête. Toutes les entrées sont obligatoires. Nécessite une authentification.

- **DELETE /api/contacts/:id** : Supprime un contact existant. L'ID du contact doit être fourni dans l'URL. Aucune autre entrée requise. Nécessite une authentification.

- **GET /api/contacts/:id** : Récupère un contact spécifique. L'ID du contact doit être fourni dans l'URL. Aucune autre entrée requise. Nécessite une authentification.

## Companies

- **PUT /api/companies/:id** : Modifie une entreprise existante. L'ID de l'entreprise doit être fourni dans l'URL. Les données de l'entreprise (`type_ID`, `name`, `country`, `tva`) doivent être fournies dans le corps de la requête. Toutes les entrées sont obligatoires. Nécessite une authentification.

- **POST /api/companies** : Crée une nouvelle entreprise. Les données de l'entreprise (`type_ID`, `name`, `country`, `tva`) doivent être fournies dans le corps de la requête. Toutes les entrées sont obligatoires. Nécessite une authentification.

- **DELETE /api/companies/:id** : Supprime une entreprise existante. L'ID de l'entreprise doit être fourni dans l'URL. Aucune autre entrée requise. Nécessite une authentification.

- **GET /api/companies/:id** : Récupère une entreprise spécifique. L'ID de l'entreprise doit être fourni dans l'URL. Aucune autre entrée requise. Nécessite une authentification.

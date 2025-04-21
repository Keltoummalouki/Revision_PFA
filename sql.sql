
1.
SELECT utilisateurs.id, utilisateurs.nom, utilisateurs.role, langues.nom, profil_langue.niveau from utilisateurs
INNER JOin profils ON profils.utilisateur_id = utilisateurs.id
INNER JOIN profil_langue ON profil_langue.profil_id = profils.id
INNER JOIN langues On profil_langue.langue_id = langues.id
WHERE utilisateurs.role = 'freelance' AND langues.nom = 'Anglais' AND profil_langue.niveau = 'avancé'

2. 
SELECT utilisateurs.nom, COUNT(competences.id) from utilisateurs
INNER JOin profils ON profils.utilisateur_id = utilisateurs.id
INNER JOIN profil_competence ON profil_competence.profil_id = profils.id
INNER JOIN competences On profil_competence.competence_id = competences.id
GROUP By utilisateurs.nom
LIMIT 3

3.
SELECT utilisateurs.nom, profils.tarif_horaire, adresses.ville from utilisateurs
INNER JOin profils ON profils.utilisateur_id = utilisateurs.id
INNER JOIN adresses ON adresses.utilisateur_id = utilisateurs.id
WHERE utilisateurs.role = 'freelance' AND profils.disponible = true

4.
SELECT utilisateurs.id , utilisateurs.nom from utilisateurs
RIGHT JOin profils ON profils.utilisateur_id = utilisateurs.id

5.
SELECT utilisateurs.id , utilisateurs.nom from utilisateurs
right JOIN projets On projets.client_id = utilisateurs.id
WHERE utilisateurs.role = 'client' 
GROUP By  utilisateurs.id

6.
SELECT projets.titre , projets.budget, COUNT(offres.id) from projets
INNER JOIN offres ON offres.projet_id = projets.id
WHERE projets.statut = 'ouvert'

7.
SELECT offres.id from utilisateurs
INNER Join profils On profils.utilisateur_id = utilisateurs.id
INNER Join offres On offres.freelance_id = utilisateurs.id
WHERE profils.tarif_horaire < 100 

8.
SELECT projets.titre, COUNT(offres.projet_id) from projets
INNER Join offres On offres.projet_id = projets.id
GROUP By projets.titre

9.


10.
SELECT projets.titre , missions.date_debut , missions.date_fin FROM projets
INNER JOIN missions on missions.offre_id = offres.id
INNER JOIN offres on offres.projet_id = projets.id
WHERE projets.statut = "terminé"
GROUP BY projets.titre




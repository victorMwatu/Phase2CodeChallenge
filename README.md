# Phase 2 Code Challenge Smart Goal Planner 

## Description

Submission for Phase-2 Code Challenge which was to create a comprehensive financial goal management dashboard that helps users track multiple savings goals, make deposits, and monitor their progress toward achieving financial objectives.


## Deployment

- **Frontend**: [https://victormwatu.github.io/Phase2CodeChallenge](https://victormwatu.github.io/Phase2CodeChallenge)
- **Backend**: Hosted on Render

## Project Structure

smart-goal-planner/
├── public/
│   └── index.html
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── GoalCard.jsx
│   │   ├── Navbar.jsx
│   │   ├── EditPage.jsx
│   │   ├── ErrorPage.jsx
│   │   └── Goal.jsx
│   ├── pages/
│   │   └── Home.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   └── routes.jsx
├── db.json
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
└── README.md

### Database Structure (db.json)

```json
{
  "goals": [
    {
      "id": 1,
      "name": "Emergency Fund",
      "targetAmount": 10000,
      "savedAmount": 2500,
      "category": "Emergency",
      "deadline": "2024-12-31",
      "createdAt": "2024-01-15"
    }
  ]
}
```

## License

This project was created for educational purposes.

## 👨‍💻 Author

Victor Mwatu

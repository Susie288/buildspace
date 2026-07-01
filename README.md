📦 Buildspace Kubernetes + Docker Demo
🚀 Overview
This project demonstrates how to containerize a web application using Docker and deploy it to a local Kubernetes cluster (Minikube). 
It includes a full DevOps workflow from building a Docker image to exposing the app via a Kubernetes Service.

The project uses pnpm for dependency management and serves the final build using Nginx inside a multi-stage Docker container.

🛠️ Tech Stack
Docker 🐳
Kubernetes (Minikube) ☸️
Node.js 22
pnpm
Nginx
Git & GitHub
📁 Project Structure
Room11 demo/
│
├── buildspace/              # Application source code
│   ├── src/
│   ├── package.json
│   ├── Dockerfile
│
├── k8s/                     # Kubernetes manifests
│   ├── deployment.yaml
│   ├── service.yaml
│
└── README.md
⚙️ How It Works
The app is built using Node.js and pnpm
Docker creates a production build using a multi-stage process
The build is served using Nginx
Kubernetes deploys the container in a cluster
A Service exposes the app using a NodePort
🐳 Build Docker Image
docker build -t buildspace .
☸️ Start Kubernetes Cluster (Minikube)
minikube start
🚀 Deploy to Kubernetes
kubectl apply -f k8s/

Or individually:

kubectl apply -f deployment.yaml
kubectl apply -f service.yaml
🌐 Access the Application
minikube service buildspace-sample-service

This will open the app in your browser.

📊 Check Status
kubectl get pods
kubectl get services
⚠️ Common Issues
ImagePullBackOff / ErrImageNeverPull

Make sure the Docker image exists inside Minikube:

minikube image load buildspace
Pods not running

Check logs:

kubectl describe pod <pod-name>
📚 Key Learning Outcomes
Docker image creation and optimization
Multi-stage Docker builds
Kubernetes Deployments and Services
Label selectors and pod networking
Local cluster management using Minikube

👨‍💻 Author
Susie.dev 🚀
DevOps & Cloud Engineering Learner

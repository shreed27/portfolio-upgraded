import MongoDB from '@/components/technologies/MongoDB';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import ReactIcon from '@/components/technologies/ReactIcon';
import TypeScript from '@/components/technologies/TypeScript';
import Python from '@/components/technologies/Python';
import GCP from '@/components/technologies/GCP';
import AWS from '@/components/technologies/AWS';

export const mySkills = [
  <Python key="python" />,
  <TypeScript key="typescript" />,
  <ReactIcon key="react" />,
  <GCP key="gcp" />,
  <AWS key="aws" />,
  <PostgreSQL key="postgresql" />,
  <MongoDB key="mongodb" />,
];

export const about = {
  name: 'Shreed Shrivastava',
  description: `I'm an AI Engineer and Quant Trader at the intersection of Market Microstructure and Agentic AI. I've engineered low-latency RAG systems and cloud-native NLP intelligence engines.

My expertise includes:
• **Languages**: Python, C++, SQL, Solidity.
• **AI & ML**: RAG, LLMs, Computer Vision (OpenCV, OCR, Tesseract, TrOCR), Agentic AI, Langchain, HuggingFace, CrewAI, n8n.
• **Quant & Trading**: HFT, Market Microstructure, Statistical Arbitrage, Portfolio Risk Management (Sharpe/Sortino, VaR modeling).
• **Cloud & Systems**: GCP (Vertex AI, GKE, BigQuery), AWS, Firebase.`,
};

import React from "react";
import {
  ImpactWrapper,
  ImpactGrid,
  NarrativePanel,
  ProofGrid,
  ProofCard,
  SystemsStrip,
  SystemMetric,
} from "./ImpactElements";

const proofPoints = [
  {
    label: "Agentic Reliability",
    title: "Autonomous triage for data platform incidents",
    text:
      "Designed LangGraph workflows that combine rule-based checks, LLM classification, log summarization, historical context retrieval, Slack alerting, Jira creation, and guarded remediation.",
  },
  {
    label: "Multilingual AI",
    title: "Low-resource language systems for healthcare",
    text:
      "Built and evaluated voice AI pipelines across rare and dialect-rich languages, balancing speech accuracy, inference latency, conversational quality, and clinical workflow reliability.",
  },
  {
    label: "MLOps",
    title: "Fine-tuning pipelines beyond notebooks",
    text:
      "Created dataset preparation, training, evaluation, and deployment flows for multilingual AI systems with production feedback loops and model-quality checkpoints.",
  },
  {
    label: "Platform Thinking",
    title: "Backend systems that make AI observable",
    text:
      "Integrated Airflow, PostgreSQL dashboards, Snowflake pipelines, FastAPI services, provider benchmarks, and monitoring practices so AI behavior can be measured and improved.",
  },
];

function Impact() {
  return (
    <ImpactWrapper id="impact">
      <div className="Container">
        <ImpactGrid>
          <NarrativePanel>
            <div className="SectionKicker">Selected Operating Scope</div>
            <h2>Building AI systems with production judgment, not demo-day optimism.</h2>
            <p>
              My strongest work is where ambiguous AI capability has to become a reliable
              product surface: choosing the right architecture, evaluating providers,
              designing guardrails, wiring observability, and making the system useful for
              engineers, SREs, healthcare teams, and end users.
            </p>
          </NarrativePanel>

          <ProofGrid>
            {proofPoints.map((point) => (
              <ProofCard key={point.title}>
                <span>{point.label}</span>
                <h3>{point.title}</h3>
                <p>{point.text}</p>
              </ProofCard>
            ))}
          </ProofGrid>
        </ImpactGrid>

        <SystemsStrip>
          <SystemMetric>
            <strong>LLM + rules</strong>
            <span>Hybrid decision systems for safer automation</span>
          </SystemMetric>
          <SystemMetric>
            <strong>STT/TTS</strong>
            <span>Real-time voice pipelines with provider benchmarking</span>
          </SystemMetric>
          <SystemMetric>
            <strong>RAG</strong>
            <span>Context retrieval over incidents, metrics, and product data</span>
          </SystemMetric>
          <SystemMetric>
            <strong>MLOps</strong>
            <span>Training loops, evaluations, dashboards, and deployment flow</span>
          </SystemMetric>
        </SystemsStrip>
      </div>
    </ImpactWrapper>
  );
}

export default Impact;

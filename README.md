
# 🌍 PRAMĀṆA (प्रमाण)
### AI-Powered Impact & Sustainability Media Intelligence Platform

> **Transforming raw field photos and videos into searchable evidence, verifiable change insights, and compelling impact stories using Cloudinary.**

---

## 📌 Problem Statement

NGOs, civic bodies, and sustainability organizations capture massive volumes of raw field photos and videos across remote projects, environmental restorations, and community interventions[cite: 2]. However, manually organizing, auditing, and verifying this unstructured visual stream is labor-intensive and prone to data silos[cite: 2]. Key challenges include:

- **Unstructured Backlogs**: Media assets lack consistent tagging, geolocation tracking, and structured timelines[cite: 2].
- **Proof of Impact Bottlenecks**: Quantifying progress (e.g., afforestation, sanitation, rural infrastructure) requires verifiable before-and-after visual evidence that is difficult to align[cite: 2].
- **Audit & Storytelling Gaps**: Donors and compliance auditors demand tamper-proof traceability back to source assets, while communications teams struggle to extract campaign-ready impact narratives[cite: 2].

---

## 💡 Solution: PRAMĀṆA

**PRAMĀṆA** (*Sanskrit for "Proof / Evidence"*) automates the visual evidence lifecycle using Cloudinary’s media APIs and multimodal AI[cite: 2]. It indexes unstructured field media into a structured, queryable knowledge graph—enabling automated timeline matching, before-and-after visual diffing, semantic natural language search, and automated impact reporting[cite: 2].

---

## 🚀 Key Features

- **Automated Media Intelligence & Tagging**: Extracts geolocation, contextual activities, scene elements, and progress signals upon ingestion via Cloudinary AI analysis[cite: 2].
- **Before-and-After Visual Evidence Engine**: Aligns spatial landmarks and visual perspectives across time to generate comparative change metrics and slider overlays[cite: 2].
- **Semantic & Multimodal Discovery**: Natural language search across visual content, field notes, and contextual metadata (e.g., *"solar pump installation in arid soil, Q3 2025"*)[cite: 2].
- **Source Traceability & Verification**: Preserves unedited original source assets with cryptographic metadata trails and reproducible Cloudinary transformation pipelines[cite: 2].
- **Campaign & Report Generator**: Converts raw evidence galleries into audit-ready PDF impact summaries and social-ready visual highlights[cite: 2].

---

## 🏗️ System Architecture

```text
  [Field Workers / Drone / Mobile Upload]
                    │
                    ▼
     [Cloudinary Media Pipeline]
       ├── Secure Asset Ingestion & Versioning
       ├── AI Tagging, Geo/EXIF Extraction & Moderation
       └── Responsive Transformations & Dynamic Watermarking
                    │
                    ▼
       [PRAMĀṆA Intelligence Core]
       ├── Multimodal Embeddings & Semantic Index
       ├── Before / After Spatial Alignment Engine
       └── Evidence Verification & Audit Ledger
                    │
                    ▼
            [User Interfaces]
       ├── Field Evidence Dashboard & Map Explorer
       ├── Visual Diff / Verification Inspector
       └── Impact Story & Report Exporter

```



## 🛠️ Tech Stack

* **Media & Asset Management**: [Cloudinary](https://cloudinary.com/) (Upload API, AI Analysis, Video Transcoding, Image Transformations)


* **AI & Embeddings**: Multimodal LLMs / Vision APIs for contextual extraction & tagging


* **Backend**: Node.js (Express / NestJS) or Python (FastAPI)
* **Database**: PostgreSQL / MongoDB (Metadata & audit trails) + Vector Index (Semantic search)


* **Frontend**: Next.js / React, Tailwind CSS, Mapbox / Leaflet

---

## ⚡ Quick Start

### Prerequisites

* Node.js 18+ or Python 3.10+
* Cloudinary Account (Cloud Name, API Key, API Secret)



### 1. Clone & Install

```bash
git clone [https://github.com/kg2655/PRAMANA-AI-Powered-Impact-Evidence-Platform-From-media-to-evidence.git](https://github.com/kg2655/PRAMANA-AI-Powered-Impact-Evidence-Platform-From-media-to-evidence.git)
cd PRAMANA-AI-Powered-Impact-Evidence-Platform-From-media-to-evidence
npm install

```

### 2. Environment Setup

Create a `.env` file in the root directory:

```env
PORT=3000
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
DATABASE_URL=your_database_connection_string
OPENAI_API_KEY=your_vision_api_key

```

### 3. Run the Development Server

```bash
npm run dev

```

Open http://localhost:3000 to access the dashboard.

---

## 📋 Core Workflows

1. **Ingest & Enrich**: Upload raw field batches. Cloudinary extracts EXIF, autotags activities, and normalizes media formats.


2. **Track Change**: Select a project site and run the Before/After comparison tool to evaluate environmental recovery or structural build progress.


3. **Search & Audit**: Query the evidence registry using plain language or geographic filters, verifying provenance down to the raw untampered asset.


4. **Publish Story**: Export customized stakeholder reports and campaign-ready cards with one click.



---

## 📄 License

Distributed under the MIT License. See `LICENSE` for details.

```

```

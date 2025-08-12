---
layout: post
title: "Building a Graduate School Recommender with RAG + Agentic AI: From Hackathon to Production"
date: 2025-08-12 16:00:00 +0900
categories: [projects]
tags: [RAG, Agentic-AI, LangChain, Streamlit, OpenAI, Hackathon, GraduateSchool, VectorEmbedding, WebDeployment]
author: "Jaehoon Han"
lang: en
excerpt: "A comprehensive journey of building a graduate school recommender system using RAG and Agentic AI technologies. From hackathon participation to actual web deployment."
description: "Complete development experience of building a RAG + Agentic AI powered graduate school recommendation system from hackathon to production deployment"
---

# Building a Graduate School Recommender with RAG + Agentic AI: From Hackathon to Production

## 🎯 Project Overview

Recently, while learning about RAG (Retrieval-Augmented Generation) and Agentic LLM technologies, I participated in a hackathon to implement these concepts in practice. This article shares my complete experience of building a **graduate school lab recommender system** from concept to deployment.

**📁 GitHub Repository**: [https://github.com/elecsonJ/team07-lab-recommender](https://github.com/elecsonJ/team07-lab-recommender)

<!--more-->

## 🎪 Hackathon Background and Motivation

### Learning Objectives
- **RAG System Implementation**: Convert PDF data to vectors for similarity-based search
- **Agentic AI Experience**: Build intelligent agents that choose different strategies based on context
- **End-to-End Service**: Complete pipeline from API integration to web deployment

### Project Concept
We aimed to solve the challenge that prospective graduate students face when finding labs that match their research interests. Instead of simple keyword matching, our goal was to create an **AI-powered intelligent recommendation system**.

## 🏗️ System Architecture

### 1. RAG (Retrieval-Augmented Generation) Core Structure

```
User Query Input
    ↓
Vector Embedding Conversion (text-embedding-3-small)
    ↓
Cosine Similarity Calculation (matching with 31 professors)
    ↓
Top-K Professor Selection
    ↓
GPT-4o-mini Detailed Recommendation Generation
    ↓
Quality Assessment & Result Return
```

### 2. Agentic AI Philosophy Implementation

The core of our system is **adaptive strategy selection based on context**:

- **Primary Strategy**: Generate responses using local RAG search
- **Quality Assessment**: If response quality is unsatisfactory
- **Secondary Strategy**: Switch to web search for additional information
- **Final Response**: Generate high-quality answers with integrated information

This goes beyond simple rule-based systems, demonstrating **agent characteristics that assess situations and change strategies**.

## 💾 Data and Limitations

### Practical Constraints
Due to hackathon time constraints and data collection challenges, we could only utilize data from **31 professors at Seoul National University's College of Medicine**.

### Ideal Vision
Our original goal was to collect **professor data from all universities nationwide** to:
- Cover all departments and research fields
- Build a universal graduate school recommendation system
- Create comprehensive service not limited to specific universities

### Scalability Potential
The current system is designed with an architecture that can easily expand to other universities and fields by simply replacing the data.

## 🛠️ Technical Implementation

### 1. Data Processing Pipeline

**PDF Data Extraction**:
```python
# Extract professor information from PDF
import pdfplumber
from openai import AzureOpenAI

def extract_professor_info(pdf_path):
    with pdfplumber.open(pdf_path) as pdf:
        # Convert to structured data using GPT-4o-mini
        structured_data = process_with_gpt(raw_text)
    return structured_data
```

**Vector Embedding Generation**:
```python
from langchain_openai import AzureOpenAIEmbeddings

embeddings = AzureOpenAIEmbeddings(
    model="text-embedding-3-small",
    dimensions=1536
)
```

### 2. Hybrid Search System

**RAG Search**:
```python
def rag_search(query, k=5):
    # Select top K professors using vector similarity
    similar_docs = vector_store.similarity_search(query, k=k)
    
    # Generate personalized recommendations with GPT-4o-mini
    response = llm.invoke(
        f"Recommend based on these professors: {similar_docs}"
    )
    return response
```

**Web Search Fallback**:
```python
def web_search_fallback(query):
    if quality_score < threshold:
        # Real-time web search using Tavily API
        web_results = search_web(enhanced_query)
        return generate_response_with_web_data(web_results)
```

### 3. Conversational Interface

**Conversation Context Management**:
```python
@dataclass
class ConversationHistory:
    queries: List[str] = field(default_factory=list)
    responses: List[str] = field(default_factory=list)
    
    def get_context(self, last_n=3):
        # Build context from last N conversations
        return build_context(self.queries[-last_n:])
```

**Query Classification System**:
```python
def classify_query(query):
    # Automatically distinguish new vs follow-up questions
    if is_followup_question(query):
        return enhance_with_context(query)
    return query
```

## 🌐 Deployment and Service

### Streamlit Cloud Deployment

To transform our hackathon implementation into an **actual service**, we utilized Streamlit Cloud.

**Deployment Process**:
1. Push code to GitHub
2. Automatic build on Streamlit Cloud
3. Securely configure environment variables (API keys)
4. Launch real-time service

**User Experience Optimization**:
- Responsive UI for mobile/desktop compatibility
- Real-time conversational interface
- Query classification result visualization
- Detailed recommendation reasoning

## 📈 Project Results and Learning

### Technical Achievements

**1. First-time Technology Experiences**:
- Chatbot service implementation using OpenAI API
- RAG system design and implementation
- Translating Agentic AI philosophy into actual code
- Complete web service deployment process

**2. Data Quality Optimization**:
- Built PDF extraction → structuring → vectorization pipeline
- Achieved 95.8% high data completeness
- Clear separation of research topics and technical methods

**3. Hybrid Search Effectiveness**:
- Fast primary filtering with vector search
- Complementary information collection via web search
- Context-adaptive strategy selection

### User Experience Improvements

**Natural Conversation Flow**:
```
User: "I'm interested in cancer research"
AI: "For cancer research at SNU Medical School, I recommend Prof. Park Jaehyun's Immune Cancer Therapy Lab and Prof. Kang Kunwook's Molecular Imaging and Therapy Lab..."

User: "What about nanotechnology specifically?"
AI: "Among the professors mentioned, Prof. Kang Kunwook specifically conducts cancer treatment research using nanotechnology. His main research focus is targeted imaging and therapy using nanoparticles..."
```

**Personalized Recommendations**:
- Semantic understanding beyond simple keyword matching
- User intent recognition and customized responses
- Specific contact information and lab details

## 🔮 Expansion Possibilities and Future Vision

### Short-term Improvements
1. **Data Expansion**: Add data from other universities and departments
2. **Advanced Filtering**: Research funding scale, graduate career paths, advisor styles
3. **Personalization**: User profile-based long-term recommendations

### Long-term Vision
- **Nationwide Integrated Platform**: Integrate all university lab information
- **Real-time Updates**: Automatic updates of papers, grants, hiring information
- **Community Features**: Senior-junior matching, lab reviews

## 💡 Key Learnings and Insights

### 1. Practical RAG Application
Implementing RAG beyond theory made me realize the **critical importance of search quality**. Simple vector similarity alone is insufficient; domain-specific preprocessing and postprocessing are essential.

### 2. Potential of Agentic AI
I experienced the power of systems that **adapt based on context** rather than relying on a single strategy. This represents true 'intelligence' implementation beyond simple if-else logic.

### 3. Importance of Deployment
No matter how good the technology is, **it's meaningless if actual users can't access it**. Simple deployment through Streamlit Cloud transformed our project into a 'finished product'.

### 4. Reality of Data
Perfect data doesn't exist, and **valuable services can be created even with limited data**. What matters isn't the quantity of data but its quality and how it's utilized.

## 🎉 Conclusion

This hackathon project experience of **implementing RAG and Agentic AI** and creating a **complete end-to-end service** was invaluable.

Particularly:
- **Theory to Practice**: Implementing technologies I'd only read about into actual code
- **Problem-solving Experience**: Addressing real-world issues like data scarcity, API limitations, deployment challenges
- **User Perspective**: Considering actual user needs beyond technical implementation

I look forward to continuing **practical yet technically challenging projects** like this. I will keep exploring ways AI technology can contribute to solving real societal problems.

---

**Project Links**:
- 📁 **GitHub**: [https://github.com/elecsonJ/team07-lab-recommender](https://github.com/elecsonJ/team07-lab-recommender)
- 🏷️ **Tech Stack**: RAG, Agentic AI, LangChain, Streamlit, GPT-4o-mini, Vector Embeddings

*Questions or feedback are always welcome! Please leave a comment.* 😊
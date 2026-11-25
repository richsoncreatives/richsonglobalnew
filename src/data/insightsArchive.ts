import insightsData from './insights.json';
import type { InsightArticle } from './siteData';

export const TECH_INSIGHTS: InsightArticle[] = insightsData.tech as unknown as InsightArticle[];
export const RELATIONSHIP_INSIGHTS: InsightArticle[] = insightsData.relationships as unknown as InsightArticle[];
export const LEADERSHIP_INSIGHTS: InsightArticle[] = insightsData.leadership as unknown as InsightArticle[];
export const FAITH_INSIGHTS: InsightArticle[] = insightsData.faith as unknown as InsightArticle[];
export const CREATIVE_INSIGHTS: InsightArticle[] = insightsData.creative as unknown as InsightArticle[];
export const ALL_INSIGHTS: InsightArticle[] = [
  ...TECH_INSIGHTS,
  ...RELATIONSHIP_INSIGHTS,
  ...LEADERSHIP_INSIGHTS,
  ...FAITH_INSIGHTS,
  ...CREATIVE_INSIGHTS
];
export const CAPACITY_QUOTES: string[] = insightsData.quotes as string[];
export const DAILY_CAPSULES: string[] = CAPACITY_QUOTES;

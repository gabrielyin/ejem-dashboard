'use client'

import { brazilData, devsPerState } from "@/utils/data";
import { Card, BarChart, Title, Subtitle, Text, Grid, Col, Metric, List, ListItem, ProgressBar, Flex, Callout, DonutChart } from "@tremor/react";

export default function Home() {
  return (
    <main className="gap-2 min-h-screen py-14">
      <div className="flex gap-6 min-h-56 px-14 mb-6">
        <Card className="flex-1">
          <Text>Locais</Text>
          <Metric>Top 3 Locais</Metric>
          <List className="mt-4">
            {brazilData.map((location) => (
              <ListItem key={location.location}>
                <div className="w-full">
                  <Text>{location.location}</Text>
                  <ProgressBar
                    value={location.share / 335 * 100}
                    label={`${Math.round(location.share / 335 * 100)}%`}
                    tooltip={location.amount}
                  />
                </div>
              </ListItem>
            ))}
          </List>
        </Card>
        <Card className="flex-1">
          <Text>Distribuição</Text>
          <Metric>Desenvolvedores</Metric>
          <DonutChart
            className="mt-6"
            data={devsPerState}
            category="Quantidade de desenvolvedores"
            index="location"
          />
        </Card>
        <Card className="flex-1 flex flex-col justify-between">
          <div>
            <Flex justifyContent="start" alignItems="baseline" className="space-x-3 truncate">
              <Metric className="text-6xl">335</Metric>
              <Text>Desenvolvedores encontrados</Text>
            </Flex>
          </div>
          <div>
            <Callout
              className="h-fit"
              title={`Quantidade de desenvolvedores`}
              color='green'
            >
              Este número indica a quantidade de desenvolvedores encontrados na busca no LinkedIn.
            </Callout>
          </div>
        </Card>
      </div>
      <div className="px-14">
        <Card>
          <Title>Desenvolvedores por estado (Linkedin 2023)</Title>
          <Subtitle>
            Quantiade de desenvovledores por estado no Brasil encontrados no Linkedin.
          </Subtitle>
          <BarChart
            className="mt-6 min-h-[500px]"
            data={devsPerState}
            index="location"
            categories={["Quantidade de desenvolvedores"]}
            colors={["blue"]}
            yAxisWidth={48}
          />
        </Card>
      </div>
    </main >
  )
}

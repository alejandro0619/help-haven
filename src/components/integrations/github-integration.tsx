"use client";

import { useState, useEffect } from "react";
import {Button} from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

type props = {
  userId: string;
  organizationId: string;
}
const GithubIntegration: React.FC<props> = ({ userId, organizationId }) =>{
  const [repos, setRepos] = useState([]);
  const [selectedRepo, setSelectedRepo] = useState<string | null >(null);
  const [status, setStatus] = useState("idle"); // idle | loading | error | success

  // Llamada para obtener los repositorios del usuario
  useEffect(() => {
    const fetchRepos = async () => {
      setStatus("loading");
      try {
        const response = await fetch(`/api/github/repos?userId=${userId}`);
        const data = await response.json();
        setRepos(data);
        setStatus("success");
      } catch (error) {
        console.error("Error fetching repositories:", error);
        setStatus("error");
      }
    };

    fetchRepos();
  }, [userId]);

  const handleRepoSelection = async (repoName: string) => {
    try {
      await fetch(`/api/github/save-repo`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId, organizationId, repoName }),
      });
      setSelectedRepo(repoName);
      alert("Repository linked successfully!");
    } catch (error) {
      console.error("Error linking repository:", error);
    }
  };

  return (
    <Card>
      <h1>GitHub Integration</h1>
      <p>Link your GitHub repository to start using the integration</p>
      <Label>Repositories</Label>
      {status === "loading" && <p>Loading repositories...</p>}
      {status === "error" && <p>Error fetching repositories</p>}
      {status === "success" && (
        <div>
          {repos.map((repo: string) => (
            <div key={repo}>
              <Input
                type="radio"
                id={repo}
                name="repo"
                value={repo}
                checked={selectedRepo === repo}
                onChange={() => handleRepoSelection(repo)}
              />
              <Label htmlFor={repo}>{repo}</Label>
            </div>
          ))}
        </div>
      )}
      <Button onClick={() => alert("Next step")}>Next</Button>
    </Card>
  );
}

export default GithubIntegration;

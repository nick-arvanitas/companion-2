import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Row } from '@/components/ui/row';

export default function Completion() {
  const completionPercentage = 75; // This would typically come from your data source

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Completion Status</CardTitle>
          <CardDescription>Track your company's onboarding progress</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Overall Progress</span>
                <span>{completionPercentage}%</span>
              </div>
              <Progress value={completionPercentage} />
            </div>

            <Row label="Completion Status">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Company Information</span>
                  <span className="text-sm text-green-600">Complete</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Financial Documents</span>
                  <span className="text-sm text-yellow-600">In Progress</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Safety Certifications</span>
                  <span className="text-sm text-red-600">Not Started</span>
                </div>
              </div>
            </Row>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

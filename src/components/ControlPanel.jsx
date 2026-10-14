import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { Slider } from '@/components/ui/slider'

const HUE_TRACK =
  '[&_[data-slot=slider-track]]:h-3 [&_[data-slot=slider-track]]:bg-[linear-gradient(to_right,red,yellow,lime,cyan,blue,magenta,red)] [&_[data-slot=slider-range]]:bg-transparent [&_[data-slot=slider-thumb]]:size-4'

export function ControlPanel({ color, hue, onHueChange }) {
  return (
    <Card className="h-full rounded-none border-0 border-l shadow-none ring-0">
      <CardHeader>
        <CardTitle>Object properties</CardTitle>
        <CardDescription>Cube</CardDescription>
      </CardHeader>
      <Separator />
      <CardContent className="flex flex-col gap-4">
        <div className="flex items-center justify-between text-sm">
          <Label htmlFor="hue-slider">Color</Label>
          <span className="flex items-center gap-2 font-mono">
            <span
              className="size-4 rounded-sm border"
              style={{ backgroundColor: color }}
            />
            {hue}°
          </span>
        </div>
        <Slider
          id="hue-slider"
          aria-label="Hue"
          min={0}
          max={360}
          step={1}
          value={[hue]}
          onValueChange={([value]) => onHueChange(value)}
          className={HUE_TRACK}
        />
      </CardContent>
      <CardFooter className="mt-auto text-xs text-muted-foreground">
        Drag to orbit · Scroll to zoom · Right-drag to pan
      </CardFooter>
    </Card>
  )
}

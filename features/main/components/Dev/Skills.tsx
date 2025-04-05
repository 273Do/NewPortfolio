"use client";

import {
  SiDocker,
  SiGithub,
  SiJavascript,
  SiLaravel,
  SiNextdotjs,
  SiPhp,
  SiPrisma,
  SiPython,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from "@icons-pack/react-simple-icons";
import Matter from "matter-js";
import { useEffect, useRef, useState } from "react";

const icons = [
  { Icon: SiReact, color: "#ffffffa7" },
  { Icon: SiJavascript, color: "#fff" },
  { Icon: SiGithub, color: "#fff" },
  { Icon: SiDocker, color: "#fff" },
  { Icon: SiNextdotjs, color: "#fff" },
  { Icon: SiRedux, color: "#fff" },
  { Icon: SiTailwindcss, color: "#fff" },
  { Icon: SiPython, color: "#fff" },
  { Icon: SiPhp, color: "#fff" },
  { Icon: SiLaravel, color: "#fff" },
  { Icon: SiPrisma, color: "#fff" },
];

// { Icon: SiReact, color: "#61dafb" },
// { Icon: SiJavascript, color: "#f7df1e" },
// { Icon: SiTypescript, color: "#3178c6" },

type IconData = {
  body: Matter.Body;
  Icon: React.ElementType;
  color: string;
};

export default function Skills() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number>();
  const engineRef = useRef<Matter.Engine | null>(null);
  const renderRef = useRef<Matter.Render | null>(null);
  const [mounted, setMounted] = useState(false);
  const [iconData, setIconData] = useState<IconData[]>([]);

  useEffect(() => {
    setMounted(true);
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
      // クリーンアップ
      if (engineRef.current) {
        Matter.Engine.clear(engineRef.current);
      }
      if (renderRef.current) {
        Matter.Render.stop(renderRef.current);
        if (renderRef.current.canvas) {
          renderRef.current.canvas.remove();
        }
      }
    };
  }, []);

  useEffect(() => {
    if (!mounted || !sceneRef.current) return;

    // 物理エンジンの作成
    const engine = Matter.Engine.create({
      gravity: { x: 0, y: 0.5 },
    });
    engineRef.current = engine;
    const world = engine.world;

    // コンテナのサイズを取得
    const width = sceneRef.current.clientWidth;
    const height = sceneRef.current.clientHeight;

    // レンダラーの作成 - 見えないキャンバスを使用（位置計算のみに使用）
    const render = Matter.Render.create({
      element: sceneRef.current,
      engine: engine,
      options: {
        width: width,
        height: height,
        wireframes: false,
        background: "transparent",
        pixelRatio: window.devicePixelRatio || 1,
      },
    });
    renderRef.current = render;

    // 境界の作成
    const ground = Matter.Bodies.rectangle(width / 2, height, width, 10, {
      isStatic: true,
      label: "ground",
      render: { visible: false },
    });
    const leftWall = Matter.Bodies.rectangle(0, height / 2, 10, height, {
      isStatic: true,
      label: "leftWall",
      render: { visible: false },
    });
    const rightWall = Matter.Bodies.rectangle(width, height / 2, 10, height, {
      isStatic: true,
      label: "rightWall",
      render: { visible: false },
    });
    const ceiling = Matter.Bodies.rectangle(width / 2, 0, width, 10, {
      isStatic: true,
      label: "ceiling",
      render: { visible: false },
    });

    Matter.Composite.add(world, [ground, leftWall, rightWall, ceiling]);

    // アイコンの作成
    const newBodies = icons.map((icon, i) => {
      return Matter.Bodies.circle(100 + i * 100, 50 + Math.random() * 30, 25, {
        restitution: 0.8,
        friction: 0.21,
        frictionAir: 0.002,
        label: `icon-${i}`,
        // 明示的に密度を設定（デフォルト：0.001）
        density: 0.001,
        render: {
          fillStyle: "transparent", // 円の色を透明に設定
        },
      });
    });

    // 初期速度を設定
    for (const body of newBodies) {
      Matter.Body.setVelocity(body, {
        x: (Math.random() - 0.5) * 3,
        y: 1 + Math.random() * 2,
      });
    }

    Matter.Composite.add(world, newBodies);

    // アイコンデータの設定
    const newIconData = newBodies.map((body, i) => ({
      body,
      Icon: icons[i].Icon,
      color: icons[i].color,
    }));
    setIconData(newIconData);

    // Matterのマウス機能を設定
    // スキャンバスを取得（Matterが自動生成したもの）
    if (render.canvas) {
      // キャンバススタイルを設定（透明にして下のアイコンを見えるようにする）
      render.canvas.style.background = "transparent";

      // マウス操作の設定
      const mouse = Matter.Mouse.create(render.canvas);
      mouse.pixelRatio = window.devicePixelRatio || 1;

      const mouseConstraint = Matter.MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
          stiffness: 0.2,
          render: {
            visible: false,
          },
        },
      });

      // マウスイベントを追加
      Matter.Events.on(mouseConstraint, "mousedown", (event) => {
        console.log("Mouse down at", event.mouse.position);
      });

      Matter.Events.on(mouseConstraint, "startdrag", (event) => {
        const body = (
          event as Matter.IEvent<Matter.MouseConstraint> & {
            body?: Matter.Body;
          }
        ).body;
        console.log("Start dragging", body?.label);
        if (sceneRef.current) {
          sceneRef.current.style.cursor = "grabbing";
        }
      });

      Matter.Events.on(mouseConstraint, "enddrag", (event) => {
        console.log(
          "End dragging",
          (
            event as Matter.IEvent<Matter.MouseConstraint> & {
              body?: Matter.Body;
            }
          ).body?.label,
        );
        if (sceneRef.current) {
          sceneRef.current.style.cursor = "grab";
        }
      });

      Matter.Composite.add(world, mouseConstraint);
    }

    // レンダラーを開始（位置計算のみ - 実際の描画はReactで行う）
    Matter.Render.run(render);

    // 物理エンジン実行
    const runner = Matter.Runner.create();
    Matter.Runner.run(runner, engine);

    // アニメーションループ - アイコン位置の更新
    const updateIconPositions = () => {
      setIconData((prev) => [...prev]);
      requestRef.current = requestAnimationFrame(updateIconPositions);
    };
    requestRef.current = requestAnimationFrame(updateIconPositions);

    // リサイズハンドラ
    const handleResize = () => {
      if (!sceneRef.current) return;

      const newWidth = sceneRef.current.clientWidth;
      const newHeight = sceneRef.current.clientHeight;

      // レンダラーサイズを更新
      if (render.options) {
        render.options.width = newWidth;
        render.options.height = newHeight;
      }
      if (render.canvas) {
        render.canvas.width = newWidth;
        render.canvas.height = newHeight;
      }

      // 境界位置の更新
      Matter.Body.setPosition(ground, { x: newWidth / 2, y: newHeight });
      Matter.Body.setPosition(leftWall, { x: 0, y: newHeight / 2 });
      Matter.Body.setPosition(rightWall, { x: newWidth, y: newHeight / 2 });
      Matter.Body.setPosition(ceiling, { x: newWidth / 2, y: 0 });

      // 境界のサイズも更新
      Matter.Body.setVertices(
        ground,
        Matter.Vertices.fromPath(`0 0 ${newWidth} 0 ${newWidth} 10 0 10`),
      );
      Matter.Body.setVertices(
        ceiling,
        Matter.Vertices.fromPath(`0 0 ${newWidth} 0 ${newWidth} 10 0 10`),
      );
      Matter.Body.setVertices(
        leftWall,
        Matter.Vertices.fromPath(`0 0 10 0 10 ${newHeight} 0 ${newHeight}`),
      );
      Matter.Body.setVertices(
        rightWall,
        Matter.Vertices.fromPath(`0 0 10 0 10 ${newHeight} 0 ${newHeight}`),
      );
    };

    window.addEventListener("resize", handleResize);

    // クリーンアップ
    return () => {
      window.removeEventListener("resize", handleResize);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
      Matter.Runner.stop(runner);
      Matter.Render.stop(render);
      Matter.World.clear(world, false);
      Matter.Engine.clear(engine);
      if (render.canvas) {
        render.canvas.remove();
      }
    };
  }, [mounted]);

  if (!mounted) return null;

  return (
    <div className="w-full flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <p className="mb-1">Tech Stack</p>
        <div className="h-1 w-30 bg-muted-foreground" />
      </div>

      <div
        ref={sceneRef}
        className="relative h-52 w-full amax-w-[1180px] border border-muted-foreground overflow-hidden cursor-grab active:cursor-grabbing"
        style={{ touchAction: "none" }}
      >
        {iconData.map(({ body, Icon, color }) => (
          <div
            key={body.id}
            style={{
              position: "absolute",
              left: `${body.position.x - 20}px`,
              top: `${body.position.y - 20}px`,
              width: 50,
              height: 50,
              transform: `rotate(${body.angle}rad)`,
              willChange: "transform",
              filter: "drop-shadow(0 2px 5px rgba(0,0,0,0.2))",
              // マウス操作はMatter.jsのMouseConstraintで処理されるため
              // ここではポインターイベントを無効化
              pointerEvents: "none",
            }}
          >
            <Icon size={50} color={color} />
          </div>
        ))}
      </div>
    </div>
  );
}

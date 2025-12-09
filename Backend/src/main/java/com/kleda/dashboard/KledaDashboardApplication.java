package com.kleda.dashboard;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class KledaDashboardApplication {

    public static void main(String[] args) {
        SpringApplication.run(KledaDashboardApplication.class, args);
        System.out.println("\n" +
                "===========================================\n" +
                "Kleda Dashboard API er klar!\n" +
                "API: http://localhost:8080/api\n" +
                "H2 Console: http://localhost:8080/h2-console\n" +
                "===========================================\n"
        );
    }
}
